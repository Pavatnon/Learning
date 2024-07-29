<script setup>
    import {useAdminOrderStore} from '@/stores/Admin/Order'
    import { useRoute, RouterLink } from 'vue-router';
    import { onMounted, ref } from 'vue'

    const orderStore = useAdminOrderStore()
    const route = useRoute()

    const oderIndex = ref(-1);

    const orderData = ref({});

    onMounted(()=>{
        if(route.params.id){
            oderIndex.value = parseInt(route.params.id)
            const selectedOder = orderStore.getOrder(oderIndex.value);
            if(selectedOder){
                orderData.value = selectedOder
            } 
        }
    })
</script>
<template>
    <Adminlayout>
        <div class="flex flex-col w-8/12 mx-auto border shadow-xl p-4">
            <h1 class="text-2xl font-bold">Oder detail ID: {{oderIndex}}</h1>
            <div class="divider"></div>
            <div class="grid grid-cols-2 mx-4">
                <div>
                    <div class="flex flex-col">
                        <p class="text-xl font-bold">OderDate</p>
                        <p>{{ orderData.updatedAt }}</p>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-xl font-bold">Payment method</p>
                        <p>{{ orderData.paymentMethod }}</p>
                    </div>
                </div>
                <div>
                    <div class="flex flex-col">
                        <p class="text-xl font-bold">Payment method</p>
                        <p>{{ orderData.no }}</p>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-xl font-bold">Address</p>
                        <p>{{ orderData.address }}</p>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div v-for="item in orderData.products">
                <div class="grid grid-cols-4 my-4">
                    <div>
                        <img class="w-1/2 mx-auto" :src="item.imageUrl">
                    </div>    
                    <div class="flex flex-col justify-center">
                        <p class="font-bold">{{ item.name }}</p>
                        <p>{{ item.description }}</p>
                    </div>    
                    <div  class="flex flex-col justify-center"> จำนวน {{item.quantity}} ชิ้น</div>    
                    <div class="flex flex-col justify-center">
                        {{item.price}} THB
                    </div>    
                </div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between w-11/12 mx-auto">
                <div class="font-bold">ราคาสินค้าทั้งหมด</div>
                <div> {{ orderData.totalPrice }} THB</div>
            </div>
            <div class="flex justify-end w-11/12 mx-auto mt-8">
                <RouterLink :to="{name:'admin-oder-list'}" class="btn">Back</RouterLink>
            </div>

        </div>
    </Adminlayout>
</template>
