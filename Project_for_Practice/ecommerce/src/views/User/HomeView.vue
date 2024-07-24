<script setup>
    import {useProductStore} from '@/stores/product';

    const productStore = useProductStore();


</script>
<template>
    <UserLayout>
        <!-- Hero -->
        <section>
            <div class="hero bg-base-200 h-96">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold">MyShop</h1>
                        <p class="py-6">
                            Welcome to <span class="text-red-400 font-bold text-xl">MyShop</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Shop Shlf --> 
        <h1 class="container mx-auto my-4 text-3xl font-bold text-center">Shop Shelf</h1>
        <Product :products = "productStore.productList">
        </Product>
        
    </UserLayout>
</template>