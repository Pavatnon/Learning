<script setup >
    import {useRouter} from 'vue-router'
    import {ref} from 'vue'
    import {useAccoutStore} from '@/stores/accout'
    import {useEventStore} from '@/stores/event'

    const accoutStore = useAccoutStore()
    const eventStore = useEventStore()

    const router = useRouter()

    const passwordShow = ref(false);
    const adminPassword = ref('')
    const adminEmail = ref('')

    const handePasswordShow = () =>{
        passwordShow.value = !passwordShow.value;
    }

    const handleAdminLogin = async() =>{
        try {
            await accoutStore.signInAdmin(adminEmail.value,adminPassword.value)
            router.push({
                name: 'admin-dashboard'
            })
        } catch (error) {
            eventStore.popupMessage('error', `${error.message}`)
        }
    }

</script>

<template>
    <div class="flex w-full h-screen justify-center items-center">
        <div class="w-6/12 shadow-xl border bg-gray-300 rounded-md mx-auto">
            <div class="flex flex-col w-full p-8 items-center">
                <h1 class="text-3xl font-bold my-8">ADMIN LOGIN</h1>
                <label class="form-control w-9/12 ">
                    <div class="label">
                        <span class="label-text text-xl font-bold">Username</span>
                    </div>
                    <input type="text" placeholder="Username" class="input input-bordered w-full " v-model="adminEmail"/>
                    <div class="label">
                        <span class="label-text text-xl font-bold">Password</span>
                    </div>
                    <div class="join">
                        <input :type="passwordShow === true ? 'text' : 'password'" placeholder="Password" class="input input-bordered w-full join-item"  v-model="adminPassword"/>
                        <button class="btn join-item w-12 btn-neutral" @click="handePasswordShow()">
                            <viewIcon :fillter = true />
                        </button>
                    </div>
                    <button @click="handleAdminLogin()" class="btn btn-neutral w-full mt-8">Login</button>
                </label>
            </div>
        </div>

    </div>
</template>