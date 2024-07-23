<script setup>
    import {useCartStore} from '@/stores/user/cart'
    import {ref, onMounted } from 'vue';
    const useCartstore = useCartStore();
    const orderData = ref({});
    onMounted(()=>{
        useCartstore.loadCheckOut();
        orderData.value = useCartstore.checkOut;
        console.log(orderData.value)
    })

</script>
<template>
    <Userlayout>
        <div class="flex flex-col container mx-auto shadow-xl bg-gray-100 p-8 my-4">
            <div class="flex flex-col">
                <p class="text-3xl font-bold">Your Oder is Successful</p>
                <p class="text-2xl"><span class="font-bold">Hi'</span> {{ orderData.name }}</p>
                <p class="text-2xl">เตรียมรับสินค้าของคุณได้เลย</p>
            </div>

            <div class="divider"></div>

            <div class="grid grid-cols-4">
                <div class="flex flex-col items-center">
                    <p class="text-2xl font-bold">Oder Date</p>
                    <p class="text-xl font-bold text-gray-600">{{ orderData.orderDate }}</p>
                </div>
                <div class="flex flex-col items-center">
                    <p class="text-2xl font-bold">Oder Number</p>
                    <p class="text-xl font-bold text-gray-600">{{ orderData.orderNumber }}</p>
                </div>
                <div class="flex flex-col items-center">
                    <p class="text-2xl font-bold">Payment Method</p>
                    <p class="text-xl font-bold text-gray-600">{{ orderData.paymentMehtod }}</p>
                </div>
                <div class="flex flex-col items-center">
                    <p class="text-2xl font-bold">Address</p>
                    <p class="text-xl font-bold text-gray-600">{{ orderData.address }}</p>
                </div>
            </div>


            <div class="divider"></div>


            <div v-for="product in orderData.product">
                <div class="grid grid-cols-4 m-2 p-2 bg-slate-200">
                    <div class="flex flex-col">
                        <img :src="product.imageURL" >
                    </div>
                    <div class="flex flex-col items-center justify-center ">
                        <p class="text-2xl font-bold">{{ product.name }}</p>
                        <p class="text-xl font-bold text-gray-600">{{ product.about }}</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <p class="text-xl font-bold">จำนวน : {{ product.quantity }}</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                       <p class="text-xl font-bold">{{ product.price *  product.quantity}}  THB</p>
                    </div>
                </div>
            </div>


            <div class="divider"></div>


            <div class="flex flex-row justify-between w-full">
                <p  class="text-xl font-bold">ราคาสินค้าทั้งหมด</p>
                <p  class="text-xl font-bold">{{ orderData.totalPrice }} THB</p>
            </div>
            <div class="flex flex-row justify-between w-full">
                <p class="text-xl font-bold">ค่าส่ง</p>
                <p  class="text-xl font-bold">0 THB</p>
            </div>

            <div class="divider"></div>


            <div class="flex flex-row justify-between w-full">
                <p  class="text-xl font-bold">ราคาทั้งสิ้น</p>
                <p  class="text-xl font-bold">{{ orderData.totalPrice }} THB</p>
            </div>

            <div class="divider"></div>


            <div>
                <p class="text-xl font-bold text-center">ขอบคุณที่อุดหนุน</p>
            </div>
        </div>
    </Userlayout>
</template>