<template >
  <MountTest />
  
</template>
<script setup>
  import axios from 'axios';
  import {ref, onMounted} from 'vue';
  import MountTest from './components/mountTest.vue'

  const pokeApi = ref([]);
  const pokeNameData = ref([]);
  const pokeImgData = ref([]);

  let count = ref(0);

  const getPoke = async () => {
    try{
      const resPoke = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      pokeApi.value = resPoke.data;
      pokeNameData.value = resPoke.data.results.map(poke => ({
        name: poke.name,
        img: poke.url
      }));

    } catch(e){
      console.error(e);
    }
  };

  onMounted(() => {
    getPoke();
  });






</script>
<style>
  
</style>