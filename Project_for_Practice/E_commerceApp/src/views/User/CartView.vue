<script setup>
    import {useCartStore} from '@/stores/user/cart'
    import { RouterLink } from 'vue-router';
    
    
    const useCartstore = useCartStore();


    const hadleRemoveCart = (index) =>{
        useCartstore.remoneItem(index);
    }
    const changeQuantity = (event, index) =>{
        const newQuantity = parseInt(event.target.value);
        useCartstore.updateQuantity(index, newQuantity);
    }

</script>
<template>
    <Userlayout>
        <div class="text-3xl ml-10 font-bold my-4">
            Shoping Cart
        </div>
        <div class="container mx-auto">
            <div class="flex flex-row my-4">
                <div class="flex-auto w-64 text-2xl font-medium bg-base-200 p-4 divide-y divide-gray-400">
                    <div v-if="useCartstore.cartList.length === 0" class="flex w-full h-full justify-center items-center">
                        <p class="text-3xl font-bold ">Cart is Empy.</p>
                    </div>
                    <div v-else v-for="cartItem,index in useCartstore.cartList" class="flex " >
                        <div class="flex-1">
                            <img class="w-full h-full p-4" :src="cartItem.imageUrl">
                        </div>
                        <div class="flex-1 relative">
                            <div class="grid grid-cols-2 p-4 h-full">
                                <div class="flex flex-col justify-between">
                                    <div class="text-xl">
                                        <p class="font-bold">{{cartItem.name}}</p>
                                        <p class="text-gray-600">{{cartItem.about}}</p>
                                        <p class="text-gray-600">{{ cartItem.price }}</p>
                                    </div>
                                    <p class="text-xl font-bold">{{cartItem.status}}</p>
                                </div>
                                <div>
                                    <select v-model="cartItem.quantity" class="select select-bordered w-1/2" @change="changeQuantity($event, index)">
                                        <option v-for="quantity in 10">{{quantity}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="absolute top-0 right-0">
                                <button class="btn btn-ghost" @click="hadleRemoveCart(index)">
                                    <Xmark />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-auto w-32 text-2xl font-medium bg-slate-200 p-4">
                    <div class="flex flex-col">
                       <h1 class="font-bold">Order Summary</h1>
                       <div class="flex flex-col p-4 text-xl divide-y divide-gray-400">
                            <div class="flex justify-between py-4">
                                <p>รวมสินค้าทั้งหมด</p>
                                <p>{{useCartstore.summaryPrice}}</p>
                            </div>
                           <div class="flex justify-between py-4">
                                <p>ค่าส่ง</p>
                                <p>0</p>
                            </div>
                           <div class="flex justify-between py-4">
                                <p>ราคาทั้งสิ้น</p>
                                <p>{{useCartstore.summaryPrice}}</p>
                            </div>
                       </div>
                       
                           <RouterLink :to="{name:'checkout'}" class="btn btn-neutral my-4">ชำระเงิน</RouterLink>
                       
                    </div>

                </div>
            </div>
        </div>

    </Userlayout>
</template>