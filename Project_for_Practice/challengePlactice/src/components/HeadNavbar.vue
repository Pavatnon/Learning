<template>
    <div class="flex flex-row w-full h-[60px] bg-gray-600 items-center font-mono px-5 gap-5">
        <h1 class="text-[35px] font-bold text-white">Plagrob</h1>
        <div class="flex flex-row w-auto justify-around ml-6 gap-4">
           <button class="px-2 py-1 bg-gray-200 rounded-[15px] font-bold hover:bg-gray-400 hover:px-3 transition-all " 
            v-for ="app in appList"
            >{{app}}</button>
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue';
    const appList = ref([
        'Home',
        'JokeApp',
        'WeatherApp',
        'BlockchainApp',
        'CocktailApp',
        'UVApp',
    ]);
</script>


