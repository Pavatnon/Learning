<script setup>
    import Product from '@/components/Product.vue'

    import {UseUserProductStore} from '@/stores/user/product'
    import {useCartStore} from '@/stores/user/cart'

    const cartStore = useCartStore();
    const productStore = UseUserProductStore();
    
    const handleAddtoCart = (product) =>{
        cartStore.addToCart(product);
    }


</script>
<template>
    <Userlayout>
        <!-- HERO -->
        <div class="hero bg-base-200 min-h-96">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Plagrob Shop</h1>
                    <p class="py-6">
                        Welcome to <span class="font-bold text-red-400">Plagrobshop.</span><br>
                        Good luck.
                    </p>
                </div>
            </div>
        </div>

        <!-- Item Shelf -->
        <Product :products="productStore.list"
                :handleAddtoCart = "handleAddtoCart">
                </Product>

    </Userlayout>
</template>