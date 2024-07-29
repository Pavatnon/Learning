<script setup>
    import { RouterLink } from 'vue-router';
    import {useAdminOrderStore} from '@/stores/Admin/Order'

    const tableHeader = [
        'CustomerName',
        'Price',
        'Status',
        'UpdateAt',
        ''
    ]

    const orderStore = useAdminOrderStore()

</script>

<template>
    <Adminlayout>
            <div class="flex flex-row w-11/12 mx-auto justify-between items-center">
                <p class="text-3xl font-bold" >Order</p>
            </div>
            <Table :headers = "tableHeader">
                <tr v-for="(order, index) in orderStore.list" class="text-xl text-center">
                    <th>{{order.customerName}}</th>
                    <td>{{ order.totalPrice }}</td>
                    <td>{{ order.status }}</td>
                    <td>{{ order.updatedAt }}</td>
                    <td>
                        <RouterLink :to="{name: 'admin-oder-details', params:{id:index}}" class="btn px-8">Detail</RouterLink>
                    </td>
                </tr>
            </Table>
    </Adminlayout>
</template>