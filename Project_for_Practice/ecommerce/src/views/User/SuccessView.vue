<script setup>
    import { onMounted,ref } from "vue";
    import { useCartStore } from '@/stores/cart';

    const cartStore = useCartStore();

    const oderData = ref({});

    onMounted(()=>{
        cartStore.loadOrderCheckout();
        oderData.value = cartStore.checkout;
        console.log(oderData.value);
    })
</script>
<template>
    <UserLayout>
        <div class="container mx-auto w-6/12 shadow-xl border my-4">
            <div class="flax flex-col w-full p-8">
                <div class="felx flex-col w-full">
                     <h1 class="text-3xl font-bold">Your Oder is Successful</h1>
                     <h1 class="text-2xl font-bold">HI' {{ oderData.name }}</h1>
                     <h1 class="text-2xl font-bold">เตรียมรับสินค้าของท่านได้เลย</h1>
                </div>
                <div class="divider"></div>
                <div class="grid grid-cols-4">
                    <div class="flex flex-col items-center">
                        <p class="text-xl font-bold">Order Date</p>
                        <p class="text-xl font-bold text-gray-500">{{ oderData.orderDate }}</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p  class="text-xl  font-bold">Order Number</p>
                        <p class="text-xl font-bold text-gray-500">{{ oderData.oderNumber }}</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p  class="text-xl  font-bold">Payment Method</p>
                        <p class="text-xl font-bold text-gray-500">{{  oderData.paymentMethod }}</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p  class="text-xl  font-bold">Address</p>
                        <p class="text-xl font-bold text-gray-500">{{ oderData.address }}</p>
                    </div>
                </div>
                <div class="divider"></div>
                <div v-for="product in oderData.products">
                    <div class="grid grid-cols-4 my-4 bg-gray-200">
                        <div class="flex flex-col items-center justify-center">
                            <div class="p-4">
                                <img :src="product.imgURL" >
                            </div>
                        </div>
                        <div  class="flex flex-col items-center justify-center">
                            <div class="w-6/12">
                                <p>{{ product.name }}</p>
                                <p>{{ product.about }}</p>
                            </div>
                        </div>
                        <div  class="flex flex-col items-center justify-center">
                            <div class="w-6/12">
                                <p>Amount</p>
                                <p>{{ product.quantity }}</p>
                            </div>
                        </div>
                        <div  class="flex flex-col items-center justify-center">
                            <div class="w-6/12">
                                <p>Price</p>
                                <P>{{ product.quantity * product.price }} THB</P>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="flex flex-col w-full">
                        <div class="flex flex-row justify-between w-full">
                            <p class="text-xl font-bold">ราคาสินค้าทั้งหมด</p>
                            <p class="text-xl font-bold">{{ oderData.totalPrice }} THB</p>
                        </div>
                        <div class="flex flex-row justify-between w-full">
                            <p class="text-xl font-bold">ค่าส่ง</p>
                            <p class="text-xl font-bold">0 THB</p>
                        </div>
                        <div class="divider"></div>
                        <div class="flex flex-row justify-between w-full">
                            <p class="text-xl font-bold">รวมทั้งสิ้น</p>
                            <p class="text-2xl font-bold">{{ oderData.totalPrice }} THB</p>
                        </div>
                        
                    </div>
            </div>
        </div>
    </UserLayout>
</template>