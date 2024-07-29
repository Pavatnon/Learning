<script setup>
    import { RouterLink, useRouter } from 'vue-router';
    import { reactive } from 'vue';
    import { useAdminProductStore } from '@/stores/Admin/Product'




    const fromData = [
        {
            name:'Name',
            filed:'name'
        },
        {
            name:'Price',
            filed:'price'
        },
        {
            name:'Image',
            filed:'img'
        },
        {
            name:'Quantity',
            filed:'quantity'
        },
        {
            name:'About',
            filed:'about'
        },
    ]

    const router = useRouter();

    const useAdminProduct = useAdminProductStore();

    const productData = reactive({
        name: '',
        price: 0,
        img: '',
        quantity: 0,
        about: '',
        status: '',
    })

    const addProduct = () =>{
        useAdminProduct.addProduct(productData);
        router.push({name:'admin-products-list'})
    }
</script>
<template>
    <Adminlayout>
        <div class="flex flex-col border p-4 shadow-xl w-full">
            <h1 class="text-3xl font-bold">Create Product</h1>
            <div class="divider"></div>
            <div class="grid grid-cols-2 my-4 mx-4 gap-10">
                <label v-for="from in fromData" class="form-control w-full ">
                    <div class="label">
                        <span class="label-text text-xl font-bold">{{from.name}}</span>
                    </div>
                    <input v-model="productData[from.filed]" 
                            type="text" 
                            class="input input-bordered w-full" />
                </label>
            </div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 my-4 mx-4 gap-10">
                <div>
                    <label class="form-control w-full">
                        <div class="label">
                            <span class="label-text text-xl font-bold">Status</span>
                        </div>
                        <select v-model="productData.status" class="select select-bordered">
                            <option value="open">Open</option>
                            <option value="close" >Close</option>
                        </select>
                    </label>
                </div>
            </div>
            <div class="flex w-full justify-end my-8 gap-8 px-10">
                <RouterLink :to="{name: 'admin-products-list'}" class="btn btn-ghost">
                    Back
                </RouterLink>
                <button @click="addProduct()" class="btn btn-neutral">
                    Add
                </button>
            </div>
        </div>
    </Adminlayout>
</template>