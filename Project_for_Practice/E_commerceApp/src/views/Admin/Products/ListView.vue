<script setup>
    import {RouterLink} from 'vue-router'
    import { onMounted } from 'vue';
    import { useAdminProductStore } from '@/stores/Admin/Product'

    const useAdminProduct = useAdminProductStore();

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
</script>
<template>
    <Adminlayout>
        <div class="flex flex-row w-11/12 mx-auto justify-between items-center">
            <p class="text-3xl font-bold" >Products</p>
            <RouterLink :to ="{name:'admin-products-create'}" class="btn btn-neutral">Add Product</RouterLink>
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
    </Adminlayout>
</template>