<script setup>
    import { RouterLink } from 'vue-router';
    import {useAdminUserStroe} from '@/stores/Admin/User'

    const adminuserStore = useAdminUserStroe();

    const tableHeader = [
        'Name',
        'Role',
        'Status',
        'Update At',
        ''
    ]


    const changeStatus = (index) =>{
        let selectedUser = adminuserStore.list[index]
        selectedUser.status = selectedUser.status === 'active'? 'inactive' : 'active'
        adminuserStore.updateUser(selectedUser)
    }
</script>
<template>
    <Adminlayout>
        <div class="flex flex-row w-11/12 mx-auto justify-between items-center">
            <p class="text-3xl font-bold">User</p>
        </div>
        <Table :headers="tableHeader">
            <tr v-for="adminUser, index in adminuserStore.list" class="text-lg text-center">
                <th>{{ adminUser.name }}</th>
                <td>{{adminUser.role}}</td>
                <td>
                    <div :class="adminUser.status === 'active' ? 'badge badge-success gap-2': 'badge badge-warning gap-2'">
                        {{ adminUser.status }}
                    </div>
                </td>
                <td>{{ adminUser.updateat }}</td>
                <td>
                    <div class="flex w-full justify-center">
                        <div class="flex-1 text-end">
                            <RouterLink :to="{name: 'admin-user-update', params:{id:index}}" class="btn btn-ghost ml-2">
                                <EditIcon :Width="20" :Height="20" :Fill="black" />
                            </RouterLink>
                        </div>
                        <div class="flex-1 text-start">
                            <button class="btn ml-2" @click="changeStatus(index)">
                                {{adminUser.status === 'active' ? 'Disable': 'Enable'}}
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
        </Table>
    </Adminlayout>
</template>