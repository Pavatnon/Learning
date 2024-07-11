<template>
    <div class="flex flex-col justify-center items-center w-full h-full font-mono">
        <div class="flex justify-center m-5]">
            <h1 class="text-[60px] font-bold">Get Joke</h1>
        </div>
        <div class="flex felx-row w-full justify-center gap-6">
            <Select v-model="selectCatagory" 
                    :options="catagoryJoke" 
                    placeholder="Catagory"
                    class="w-56"/>
            <Select v-model="selectType" 
                    :options="typeJoke" 
                    placeholder="Type"
                    class="w-56"/>
           

            <Button label="GetJoke" text raised 
                    @click = "getJoke(selectCatagory, selectType)"/>
            <Button label="Reset" text raised 
                    @click ="resetValue"/>
        </div>
        <div class="mt-5 w-[600px]">
            <Panel header="Joke">
                <div v-if="selectType === 'twopart'">
                    <p>setup: {{ jokeText[0] }}</p>
                    <p>delivery: {{ jokeText[1] }}</p>
                </div>
                <div v-else-if="selectType === 'single'">
                    <p>Joke: {{ jokeText[0] }}</p>
                </div>
                <p v-else>Please Select Type!</p>
            </Panel>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const selectCatagory = ref('');
const catagoryJoke =  ref([]);
const selectType = ref('');
const typeJoke =ref([]);
const jokeText = ref(['','']);


onMounted(()=>{
    getCatagory();
    getType();
})
const getCatagory = async()=>{
    try {
        const res = await axios.get('https://v2.jokeapi.dev/categories');
        catagoryJoke.value = res.data.categories;
    } catch (error) {
        console.log(error);
    }
}
const getType = async()=>{
    try {
        const res = await axios.get('https://v2.jokeapi.dev/info');
        typeJoke.value = res.data.jokes.types;
    } catch (error) {
        console.log(error);
    }

}
const getJoke = async(catagory,type)=>{
    try {
        if(type === 'single'){
            const res = await axios.get(`https://v2.jokeapi.dev/joke/${catagory}?type=${type}`);
            jokeText.value[0] = res.data.joke;
        }
        if (type === 'twopart') {
            const res = await axios.get(`https://v2.jokeapi.dev/joke/${catagory}?type=${type}`);
            jokeText.value[0] = res.data.setup;
            jokeText.value[1] = res.data.delivery;
        }
        if(type === '' || catagory === '')
        {
            resetValue();
        }
       
    } catch (error) {
        console.log(error);
    }
}
const resetValue = ()=>{
    selectCatagory.value = '';
    selectType.value = '';
    jokeText.value[0]='';
    jokeText.value[1]='';
}






</script>