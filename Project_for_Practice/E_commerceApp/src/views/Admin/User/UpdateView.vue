<script setup>
    import { onMounted, ref, reactive } from 'vue';
    import { useRoute,useRouter, RouterLink } from 'vue-router';
    import {useAdminUserStroe} from '@/stores/Admin/User'
    const adminuserStore = useAdminUserStroe();
    const route = useRoute()
    const router = useRouter()

    const userId = ref(-1)
    const selectedUser  = ref({})

    const filds = [
        {
            name: 'Name',
            filed: 'name',
            type:'text'
        },
        {
            name: 'Role',
            filed: 'role',
            type: 'selector',
            dorpdown: ['admin', 'user', 'moderator']
        },
        {
            name: 'Status',
            filed: 'status',
            type: 'selector',
            dorpdown: ['active', 'inactive']
        },
    ]

    onMounted(()=>{
        if(route.params.id){
            userId.value = parseInt(route.params.id)
            selectedUser.value = adminuserStore.getUser(userId.value);

            if(selectedUser.value){
                fromData.name = selectedUser.value.name
                fromData.role = selectedUser.value.role
                fromData.status = selectedUser.value.status
            }
        }

    })

    const fromData = reactive({
        name:'',
        role:'',
        status:''
    })


    const editUser = () =>{
        adminuserStore.updateUser(userId.value, fromData)
        router.push({name: 'admin-user-list'})
    }
</script>

<template>
    <Adminlayout>
        <div class="flex flex-col w-full border shadow-xl p-8">
            <h1 class="text-2xl font-bold">
                EditUser id: {{ userId }}
            </h1>
            <div class="divider"></div>
            <div class="flex flex-col my-4 items-center">
                <label v-for="filed in filds" class="form-control w-full max-w-xl">
                    <div class="label">
                        <span class="label-text text-xl font-bold">{{ filed.name }}</span>
                    </div>
                    <input 
                        v-model="fromData[filed.filed]"
                        v-if="filed.type === 'text' "  
                        type="text" 
                        class="input input-bordered w-full"
                    />
                    <select 
                        v-model="fromData[filed.filed]"
                        v-if="filed.type === 'selector'" 
                        class="select select-bordered"
                    >
                        <option v-for="item in filed.dorpdown">{{ item }}</option>
                    </select>
                </label>
                <div class="flex w-full justify-end gap-4 mt-8 px-96">
                    <RouterLink :to = "{name:'admin-user-list'}" class="btn btn-ghost">Back</RouterLink>
                    <button class="btn btn-neutral" @click="editUser()">Edit</button>
                </div>
            </div>
        </div>
    </Adminlayout>
</template>