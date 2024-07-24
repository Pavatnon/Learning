<script setup>
    import {RouterLink, useRouter} from 'vue-router';
    import { useCartStore } from '@/stores/cart';
    import { reactive } from 'vue';

    const router = useRouter();

    const cartStore = useCartStore();

    const fromData = [
        {
            name: 'Email Address',
            field: 'email'
        },
        {
            name: 'Name',
            field: 'name'
        },
        {
            name: 'Address',
            field: 'address'
        },
        {
            name: 'Note',
            field: 'note'
        },
    ]

    const userFromData = reactive({
        email: '',
        name: '',
        address: '',
        note: '',

    })

    const handleFrom = () =>{
        cartStore.placeOder(userFromData);
        router.push({
            name:'success'
        })
    }
</script>
<template>
    <UserLayout>
        <div class="container mx-auto my-4">
            <div class="flex flex-row w-full">
                <div class="flex-auto w-64 bg-base-200 p-8">
                    <div class="flex- flex-col w-full h-full">
                        <label v-for="from in fromData" class="form-control w-full my-4">
                            <div class="label">
                                <span class="label-text text-xl font-bold">{{from.name}}</span>
                            </div>
                            <input v-model="userFromData[from.field]" type="text" placeholder="Type here" class="input input-bordered w-full" />
                        </label>
                        <button class="btn btn-neutral w-full mt-8" @click="handleFrom()"> ชำระเงิน</button>
                    </div>
                </div>
                <div class="flex-auto w-32 bg-slate-200 p-8">
                    <div v-if="cartStore.cartList.length > 0" v-for="cart,index in cartStore.cartList" class="flex flex-row w-full bg-gray-100 p-4 relative m-1">
                        <div class="flex-auto w-32">
                            <img :src="cart.imgURL">
                        </div>
                        <div class="flex-auto w-64">
                            <div class="flex flex-col h-full justify-between">
                                <div class="flex flex-col pl-8">
                                    <p class="text-2xl font-bold">{{ cart.name }}</p>
                                    <p class=" font-bold text-gray-600">{{ cart.about }}</p>
                                </div>
                                <div class="flex flex-row justify-between pl-8">
                                    <p class="font-bold text-gray-600">จำนวน: {{ cart.quantity }}</p>
                                    <p  class="font-bold text-gray-600">ราคา: {{  cart.price * cart.quantity}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="absolute right-0 top-0">
                            <RouterLink :to ="{name:'cart'}">
                                <button class="btn btn-ghost">Edit</button>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="divider"></div>

                    <div class="flex flex-col w-full">
                        <div class="flex flex-row justify-between w-full">
                            <p class="text-xl font-bold">ราคาสินค้าทั้งหมด</p>
                            <p class="text-xl font-bold">{{ cartStore.summaryPrice }} THB</p>
                        </div>
                        <div class="flex flex-row justify-between w-full">
                            <p class="text-xl font-bold">ค่าส่ง</p>
                            <p class="text-xl font-bold">0 THB</p>
                        </div>
                        <div class="divider"></div>
                        <div class="flex flex-row justify-between w-full">
                            <p class="text-xl font-bold">รวมทั้งสิ้น</p>
                            <p class="text-2xl font-bold">{{ cartStore.summaryPrice }} THB</p>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    </UserLayout>
</template>