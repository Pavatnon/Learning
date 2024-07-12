<template>
    <div class="flex flex-row w-full h-[60px] bg-gray-600 items-center font-mono px-5 gap-5">
        <h1 class="text-[35px] font-bold text-white">Plagrob</h1>
        <div class="flex flex-row w-auto justify-around ml-6 gap-4">
            <router-link 
                v-for="(app, index) in appList" 
                :key="index" 
                :to="`/` + app"
                @click="setCurrentPage(index)"
                class="px-2 py-1 text-black bg-gray-200 rounded-[15px] font-bold hover:bg-gray-400 hover:px-3 transition-all"
                :class="{'bg-gray-400': currentPage === index}"
            >
                {{ app }}
            </router-link>
        </div>
        <div class="ml-auto">
            <h1 class="text-[35px] font-bold text-white">{{ appList[currentPage] }}</h1>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
   
    const currentPage = ref(parseInt(localStorage.getItem('currentPage') || '0'));
    const appList = ref(['Home', 'JokeApp', 'WeatherApp']);

    const setCurrentPage = (index) => {
        currentPage.value = index;
        localStorage.setItem('currentPage', index);
    }

    
</script>

