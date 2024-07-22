<script setup>
    import {ref, onMounted} from 'vue';
    import { RouterLink, useRouter } from 'vue-router';
    import {useCartStore} from '@/stores/user/cart'
    
    
    const useCartstore = useCartStore();

    const router = useRouter();
    const isLogin = ref(false);
    const serchText = ref('');


    onMounted(()=>{
        if (localStorage.getItem('login')) {
            isLogin.value = true;
        }
    });

    const searchHandle= (event) =>{
        if (event.key === 'Enter') {
            router.push({
                name: 'search',
                query: {
                    q: serchText.value
                }
            })
        }
    }
    
    const logoutHandle = () =>{
        isLogin.value = false;
        localStorage.removeItem('login');
    }
    const loginhadle = () =>{
        isLogin.value = true;
        localStorage.setItem('login', true)
    }
</script>
<template>
    <!-- Header -->
    <section>
        <div class="navbar bg-base-300">
            <div class="flex-1">
                <RouterLink :to="{name: 'home'}" class="btn btn-ghost font-extrabold text-2xl">Plagrob Shop</RouterLink>
            </div>
            <div class="flex-none gap-3">
                <input 
                    type="text" 
                    placeholder="Search" 
                    class="input input-bordered w-24 md:w-auto"  
                    v-model ="serchText"
                    @keyup="searchHandle($event)">
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                        <div class="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span class="badge badge-sm indicator-item">{{useCartstore.summaryQuantity}}</span>
                        </div>
                    </div>
                    <div tabindex="0" class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                        <div class="card-body">
                            <span class="text-lg font-bold">{{useCartstore.summaryQuantity}} Items</span>
                            <span class="text-info">Subtotal: {{useCartstore.summaryPrice}} THB</span>
                            <div class="card-actions">
                                <RouterLink :to="{name: 'cart'}" class="btn btn-primary btn-block">View cart
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="isLogin === false"  class= "items-center">
                    <button class="font-bold btn btn-ghost" @click = "loginhadle()">Login</button>
                </div>
                <div v-if="isLogin === true" class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <RouterLink :to="{name:'profile'}" class="justify-between">Profile</RouterLink>
                        </li>
                        <li><a @click = "logoutHandle()">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>


    <!-- Contant -->
    <slot></slot>


    <!-- Footer -->
    <section>
        <footer class="footer bg-base-300 text-black p-10">
            <nav>
                <h6 class="footer-title">Services</h6>
                <a class="link link-hover">Branding</a>
                <a class="link link-hover">Design</a>
                <a class="link link-hover">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 class="footer-title">Company</h6>
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Jobs</a>
                <a class="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 class="footer-title">Legal</h6>
                <a class="link link-hover">Terms of use</a>
                <a class="link link-hover">Privacy policy</a>
                <a class="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    </section>
</template>