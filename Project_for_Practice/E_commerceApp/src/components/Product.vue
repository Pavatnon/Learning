<script setup>
    import { defineProps } from 'vue'

    

    defineProps({
        products: Array,
        handleAddtoCart: Function
    })
  
</script>
<template>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 gap-4 m-4">
        <div v-for="product in products" class="card bg-base-100 w-full shadow-xl">
            <figure>
                <img class="w-full" :src="product.imageUrl" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{{product.name}}</h2>
                <p>{{ product.about }}</p>
                <div class="card-actions justify-end">
                    <button @click="handleAddtoCart(product)" class="btn btn-primary">Add Cart</button>
                </div>
            </div>
        </div>
    </section>
</template>