<script setup>
    import {RouterLink} from 'vue-router'
    import { onMounted, ref } from 'vue';
    import { useAdminProductStore } from '@/stores/Admin/Product'


    const useAdminProduct = useAdminProductStore();

    const currentPage = ref(1)

    onMounted( async()=>{
        await useAdminProduct.loadProducts()
    })

    const tableColumns = [
        'Name',
        'Image',
        'Price',
        'Quantity',
        'Status',
        'Update At',
    ]

    const handleDeleteProduct = async (productId) =>{
        try {
            await useAdminProduct.removeProduct(productId);
            await useAdminProduct.loadProducts()    
        } catch (error) {
            console.log('error',error)
        }
        
    }
    const searchProduct = async() =>{
        await useAdminProduct.loadProducts()
    }
    const statusSearch = async(newStatus) => {
        useAdminProduct.filter.status = newStatus
        await useAdminProduct.loadProducts()
    }
    const upateAtSearch = async(newStatus) =>{
        useAdminProduct.filter.sort.updateAt = newStatus
        await useAdminProduct.loadProducts()
    }
    const changePage = async(newPage) =>{
        if (newPage < currentPage.value) {
            await useAdminProduct.loadNextProduct('previous')
        }else if(newPage > currentPage.value){
            await useAdminProduct.loadNextProduct('next')
        }
        currentPage.value = newPage
        
    }
</script>
<template>
    <Adminlayout>
        <div class="flex flex-row w-11/12 mx-auto justify-between items-center">
            <p class="text-3xl font-bold" >Products</p>
            <RouterLink :to ="{name:'admin-products-create'}" class="btn btn-neutral">Add Product</RouterLink>
        </div>
        <div class="flex flex-row mt-8  w-11/12 mx-auto gap-10 items-end">
            <div >
                <input v-model = "useAdminProduct.filter.search" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="text-center">
                <h1 class="text-lg font-bold mb-4">UpdateAt</h1>
                <button @click="upateAtSearch('asc') " :class="useAdminProduct.filter.sort.updateAt === 'asc' ? 'btn-neutral': '' " class="btn mx-4">ASC</button>
                <button @click="upateAtSearch('desc') " :class="useAdminProduct.filter.sort.updateAt === 'desc' ? 'btn-neutral': '' "  class="btn">DESC</button>
            </div>
            <div class="text-center">
                <h1 class="text-lg font-bold mb-4">Status</h1>
                <button @click="statusSearch('open')" :class="useAdminProduct.filter.status === 'open' ? 'btn-neutral': ''" class="btn">Open</button>
                <button @click="statusSearch('close')" :class="useAdminProduct.filter.status === 'close' ? 'btn-neutral': ''" class="btn mx-4">Colse</button>
                <button @click="statusSearch('')"  :class="useAdminProduct.filter.status === '' ? 'btn-neutral': ''" class="btn">All</button>
            </div>
            <div>
                <button @click = "searchProduct()" class="btn px-10 font-bold">Search</button>
            </div>
        </div>
        <Table :headers = "tableColumns">
            <tr v-for= "product in useAdminProduct.list" class="text-lg text-center">
                    <th>{{ product.name }}</th>
                    <td>
                        <img class="w-20 mx-auto" :src="product.imageUrl">
                    </td>
                    <td>{{product.price}}</td>
                    <td>{{ product.remainQuantity}}/{{ product.quantity }}</td>
                    <td>
                        <div :class="product.status === 'open' ? 'badge badge-success gap-2': 'badge badge-warning gap-2'">
                            {{product.status}}
                        </div>
                    </td>
                    <td>{{ product.updateAt }}</td>
                    <td>
                        <div class="flex w-full justify-center">
                            <div class="flex-1 text-end">
                                <RouterLink :to="{name:'admin-products-update', params:{id:product.productId}}" class="btn btn-ghost">
                                    <EditIcon 
                                        :Width = "20"
                                        :Height = "20"
                                        :Fill = "black" />
                                </RouterLink>       
                            </div>
                            <div class="flex-1 text-start">
                                <button class="btn btn-ghost ml-2" @click="handleDeleteProduct(product.productId)">
                                    <TrashIcon 
                                        :Width = "20"
                                        :Height = "20"
                                        :Fill = "black"/>
                                </button>
                            </div>
                        </div>
                    </td>
                </tr>
        </Table>
        <Pagination
            :activePage = "currentPage"
            :maxPage = "useAdminProduct.totalPage"
            :changePage = "changePage"
        >

        </Pagination>
    </Adminlayout>
</template>