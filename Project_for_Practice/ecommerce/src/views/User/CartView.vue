<script setup>
    import { onMounted } from 'vue';
    import { RouterLink } from "vue-router";
    import { useCartStore } from '@/stores/cart';

    const cartStore = useCartStore();

    onMounted(()=>{
        cartStore.loadCart();
    });


    const handledeleCartList = (index)=> {
        cartStore.removeCartList(index);
    }
    const handleQuantity = (index) =>{
        const newQuantity = parseInt(cartStore.cartList[index].quantity)
        cartStore.updateQuantity(index, newQuantity);

    }

</script>
<template>
    <UserLayout>
        <div class="container mx-auto my-4">
            <h1 class="text-3xl font-bold">Product in Cart</h1>
        </div>
        <div class="container mx-auto">
            <div class="flex flex-row p-4">
                <div class="flex-auto w-64 bg-base-200 p-8">


                    <!-- card -->
                    <div v-if="cartStore.cartList.length > 0" v-for="cart,index in cartStore.cartList" class="flex flex-row w-full bg-gray-100 p-4 relative m-1">
                        <div class="flex-auto w-32">
                            <img :src="cart.imgURL">
                        </div>
                        <div class="flex-auto w-64">
                            <div class="grid grid-cols-2 h-full">
                                <div class="flex flex-col h-full justify-between">
                                    <div class="flex flex-col pl-8">
                                        <p class="text-2xl font-bold">{{ cart.name }}</p>
                                        <p class="pl-4 font-bold text-gray-600">{{ cart.about }}</p>
                                    </div>
                                    <div class="flex flex-col pl-8">
                                        <p class="font-bold text-gray-600">{{ cart.status }}: {{ cart.instock }}</p>
                                    </div>
                                </div>
                                <div>
                                    <select v-model="cart.quantity" class="select select-bordered w-1/2 max-w-xs" @change="handleQuantity(index)">
                                        <option  v-for="quantity in cart.instock">{{quantity}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="absolute right-0 top-0">
                                <button @click="handledeleCartList(index)" class="btn btn-ghost">
                                    <Xmark />
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- /card -->


                    <div v-else class="text-center">
                        <p class="text-3xl font-bold ">Cart is Empty</p>
                    </div>

                </div>
                <div class="flex-auto w-32 bg-slate-200 p-8">
                    <div class="flex flex-col h-full justify-between ">
                        <div>
                            <div class="flex flex-row w-full justify-between">
                                <p class="text-xl font-bold">ราคา</p>
                                <p class="text-xl font-bold">{{cartStore.summaryPrice}} THB</p>
                            </div>
                            <div class="flex flex-row w-full justify-between">
                                <p class="text-xl font-bold">ค่าส่ง</p>
                                <p class="text-xl font-bold">0 THB</p>
                            </div>
                            <div class="divider"></div>
                            <div class="flex flex-row w-full justify-between">
                                <p class="text-xl font-bold">รวมทั้งสิ้น</p>
                                <p class="text-xl font-bold">{{cartStore.summaryPrice}} THB</p>
                            </div>
                        </div>
                        <div class="my-4">
                            <RouterLink :to ="{name: 'checkout'}">
                                <button class="btn btn-neutral w-full">ชำระเงิน</button>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </UserLayout>
</template>