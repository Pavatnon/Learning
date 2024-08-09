<script setup>
    import {defineProps} from 'vue'


    defineProps({
        showList:[]
    })
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:md:grid-cols-3 2xl:grid-cols-4  gap-4">
        <div v-for="menu in showList" class="card bg-base-100 w-full shadow-xl">
            <figure>
                <img class="w-full h-52" :src="menu.imgUrl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{{ menu.name }}</h2>
                <h2 class="card-title mb-4">{{ menu.price }} THB</h2>
                <div class="card-actions w-full">
                    <button class="btn btn-primary w-full">Select</button>
                </div>
            </div>
        </div>
    </div>
</template>