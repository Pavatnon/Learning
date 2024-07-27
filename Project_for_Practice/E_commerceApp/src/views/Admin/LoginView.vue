<script setup >
    import {RouterLink} from 'vue-router'
    import {ref} from 'vue'

    const passwordShow = ref(false);

    const handePasswordShow = () =>{
        passwordShow.value = !passwordShow.value;
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
                    <input type="text" placeholder="Username" class="input input-bordered w-full " />
                    <div class="label">
                        <span class="label-text text-xl font-bold">Password</span>
                    </div>
                    <div class="join">
                        <input :type="passwordShow === true ? 'text' : 'password'" placeholder="Password" class="input input-bordered w-full join-item" />
                        <button class="btn join-item w-12 btn-neutral" @click="handePasswordShow()">
                            <viewIcon :fillter = true />
                        </button>
                    </div>
                    <RouterLink :to = "{name:'admin-dashboard'}" class="btn btn-neutral w-full mt-8">Login</RouterLink>
                </label>
            </div>
        </div>

    </div>
</template>