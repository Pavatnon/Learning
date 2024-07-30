<script setup>
    import {RouterLink,useRouter, useRoute} from 'vue-router';
    import {useAccoutStore} from '@/stores/accout'

    const accoutStore = useAccoutStore()

    const route = useRoute()
    const router = useRouter()


    const menuList = [
        {
            menu:'Dashboard',
            linkTo:'admin-dashboard'
        },
        {
            menu:'Product',
            linkTo:'admin-products-list'
        },
        {
            menu:'Order',
            linkTo:'admin-oder-list'
        },
        {
            menu:'User',
            linkTo:'admin-user-list'
        },

    ]
    const handleAdminLogout = async () =>{
        try {
            await accoutStore.logout()
            router.push({name:'login'})  
        } catch (error) {
            console.log('error', error)
        }
    }
</script>
<template>
    <div class="drawer drawer-open">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content p-8">
            <slot></slot>
        </div>
        <div class="drawer-side">
            <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <div class="w-full text-center my-4">
                    <p class="text-3xl font-extrabold">Back Office</p>
                </div>
                <!-- Sidebar content here -->
                <li v-for="menu in menuList" 
                    class="text-lg font-bold">
                        <RouterLink :class="menu.linkTo === route.name ? 'active' : ''" :to = "{name:menu.linkTo }">
                            {{menu.menu}}
                        </RouterLink>
                </li>
                <li>
                    <button @click="handleAdminLogout" class="text-lg font-bold">Logout</button>
                </li>
            </ul>
        </div>
    </div>
</template>