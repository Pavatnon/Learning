<script setup>
    import {ref} from 'vue'

    const tableColumns = [
        'Name',
        'Image',
        'Price',
        'Quantity',
        'Status',
        'Update At',
    ]

    const products = ref([
        {
            name: 'test',
            img: 'https://picsum.photos/id/235/200/200',
            price: 200,
            quantity: 20,
            remainQuantity: 11,
            status: 'open',
            updateAt: (new Date()).toLocaleDateString()
        },
        
    ])
</script>
<template>
    <Adminlayout>
        <div class="flex flex-row w-11/12 mx-auto justify-between items-center">
            <p class="text-3xl font-bold" >Products</p>
            <button class="btn btn-neutral">Add Product</button>
        </div>
        <div class="overflow-x-auto w-10/12 mx-auto my-8 border-t border-gray-300">
            <table class="table">
                <!-- head -->
                <thead>
                    <tr class="text-md text-center">
                        <th  v-for="col in tableColumns">{{col}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for= "product in products" class="text-lg text-center">
                        <th>{{ product.name }}</th>
                        <td>
                            <img class="w-20 mx-auto" :src="product.img">
                        </td>
                        <td>{{product.price}}</td>
                        <td>{{ product.remainQuantity}}/{{ product.quantity }}</td>
                        <td>{{product.status}}</td>
                        <td>{{ product.updateAt }}</td>
                        <td>
                            <button class="btn btn-ghost">
                                <EditIcon 
                                    :Width = "20"
                                    :Height = "20"
                                    :Fill = "black" />
                            </button>
                            <button class="btn btn-ghost ml-2">
                                <TrashIcon 
                                    :Width = "20"
                                    :Height = "20"
                                    :Fill = "black"/>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Adminlayout>
</template>