<script setup>


    const tableColumns = [
        'Name',
        'Image',
        'Price',
        'Quantity',
        'Status',
        'Update Atc',
    ]
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
                    <tr v-for= "product in 5" class="text-lg text-center">
                        <td class="font-bold">name</td>
                        <td>img</td>
                        <td>100</td>
                        <td>0/20</td>
                        <td>status</td>
                        <td></td>
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