<script setup>
    import { defineProps } from "vue";

    defineProps({
        products : [],
    })
</script>
<template>
     <section class="my-8 mx-8">
        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">   
            <div v-for="product in products" class="card bg-base-100 w-full shadow-xl">
            <figure>
                <img :src="product.imgURL"
                    alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title font-bold">{{ product.name }}</h2>
                <p class="text-gray-500">{{ product.about }}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        </div>
     </section>
</template>