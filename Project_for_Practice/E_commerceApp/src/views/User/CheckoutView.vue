<script setup>
    import { RouterLink, useRouter } from 'vue-router';
    import {useCartStore} from '@/stores/user/cart'
    import { reactive } from 'vue';

    const useCartstore = useCartStore();
    const router = useRouter();

    const fromData = [
        {
            name:' Email address',
            field: 'email'
        },
        {
            name:' Name',
            field: 'name'
        },
        {
            name:' Address',
            field: 'address'
        },
        {
            name:' Note',
            field: 'note'
        },

    ]

    const userFromData = reactive({
        email: '',
        name: '',
        address: '',
        note: ''
    })

    const handleFrom = () =>{
        useCartstore.placeOder(userFromData);
        // router.push({name: 'success'});
    }
</script>
<template>
    <Userlayout>
        <div class="text-3xl ml-10 font-bold my-4">
            CheckOut
        </div>
        <div class="container mx-auto">
            <div class="flex flex-row my-4">
                <div class="flex-auto w-64 text-2xl font-medium bg-base-200 p-4">
                    <label v-for="from in fromData" class="form-control w-full  p-4">
                        <div class="label">
                            <span class="label-text text-xl">{{from.name}}</span>
                        </div>
                        <input v-model="userFromData[from.field]" type="text" placeholder="Type here"
                            class="input input-bordered w-full" />
                    </label>
                    <div class="w-full p-4 mt-4">
                        <button @click="handleFrom()" class="btn btn-neutral w-full">ชำระเงิน</button>
                    </div>
                </div>
                <div class="flex-auto w-32 text-2xl font-medium bg-slate-200 p-4">
                    <div class="flex flex-col">
                        <div v-for="cartIttem in useCartstore.cartList" class="flex bg-slate-300 p-4 m-1">
                            <div class="flex-auto p-4">
                                <img class="w-full" :src="cartIttem.imageUrl">
                            </div>
                            <div class="flex-auto p-4">
                                <div class="flex flex-col h-full justify-between">
                                    <div>
                                        <p class="font-bold">{{cartIttem.name}}</p>
                                        <p class="text-xl text-gray-600">จำนวน: {{ cartIttem.quantity }}</p>
                                    </div>
                                    <div>
                                        <RouterLink :to="{name:'cart'}" class="btn btn-neutral">Edit</RouterLink>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div class="divider"></div>
                    </div>
                    <div class="flex flex-col w-full px-4 text-xl">
                        <div class=" flex flex-row w-full justify-between">
                            <p>ราคาสิ้นค้าทั้งหมดทั้งหมด</p>
                            <p>{{ useCartstore.summaryPrice }} THB</p>
                        </div>
                        <div class=" flex flex-row w-full justify-between">
                            <p>ค่าส่ง</p>
                            <p>0 THB</p>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class=" flex flex-row w-full justify-between px-4 text-xl">
                        <p>ราคาสิ้นค้าทั้งหมดทั้งหมด</p>
                        <p>{{ useCartstore.summaryPrice }} THB</p>
                    </div>
                </div>
            </div>
        </div>
    </Userlayout>
</template>