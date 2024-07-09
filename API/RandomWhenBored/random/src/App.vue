<template >
  <!-- for header -->
    <section class="m-5"  >
      <div class="text-center">
        <h1 class="text-[30px] font-bold">Random Hobby weh your bored.</h1>
      </div>
    </section>
    <!-- main -->
    <section>
        <div class="flex justify-center items-center w-full h-screen">
          <div class="flex flex-col border-red-200 w-[500px] h-[200px]">
              <div class="flex flex-row w-[90%] justify-around">
                  <select class="w-[20%] border"
                  v-model="selectType"
                  @change = "onselect">
                  <option value="" hidden selected>Please Select</option>
                  <option v-for="type in typeSelect">{{ type }}</option>
                 
                    
                  </select>
                  <select class="w-[20%] border">
                    <option value="" hidden selected>Please Select</option>
                    <option v-for="type in typeSelect">{{ type }}</option>
                  </select>
                  <button class="bg-gray-200 px-3 py-1 rounded-[15px] hover:bg-gray-300 transition-all"

                  >Go</button>
              </div>
              <h1>{{ selectNumber }}</h1>
          </div>
        </div>      
    </section>
</template>
<script setup>
import axios from 'axios';
import { ref,onMounted } from 'vue';

const selectType = ref('');
const typeSelect = ref([
  '1','2','3'
]);
const selectNumber= ref();
onMounted(() => {
  getType();
});
const getType = async () => {
  try {
    const res = await axios.get('/api/filter?type');
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
}




</script>



