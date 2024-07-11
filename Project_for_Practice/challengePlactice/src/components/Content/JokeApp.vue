<template>
    <div class="flex flex-col justify-center items-center w-full h-full">
        <div class="flex felx-row w-full justify-center gap-6">
            <Select v-model="selectCatagory" 
                    :options="catagoryJoke" 
                    placeholder="Catagory"
                    class="w-56"/>
            <Select v-model="selectCatagory" 
                    :options="catagoryJoke" 
                    placeholder="Catagory"
                    class="w-56"/>

            
        </div>
        
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
const selectCatagory = ref();
const catagoryJoke =  ref([]);


onMounted(()=>{
    getCatagory();
})
const getCatagory = async()=>{
    try {
        const res = await axios.get('https://v2.jokeapi.dev/categories');
        catagoryJoke.value = res.data.categories;
    } catch (error) {
        console.log(error);
    }
}





</script>