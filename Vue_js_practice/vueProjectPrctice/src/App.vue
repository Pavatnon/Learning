<template>
  <header>
    <div class="flex flex-row bg-gray-300 w-full">
      <div class="flex flex-row w-[50%] pl-5 py-2 justify-between">
        <button
          v-for="(btn, index) in btns"
          :key="index"
          class="bg-gray-500 h-[35px] w-[90px] text-gray-200 rounded-[7px] font-bold hover:w-[100px] hover:bg-gray-400 hover:text-gray-600 transition-all"
          @click="console.log(index)"
        >
          {{ btn }}
        </button>
      </div>
    </div>
  </header>

  <main>
    <div>
      <SubmitPage />
    </div>
    <div class="page2 flex w-full h-screen justify-center">
      <ListCard />
    </div>
  </main>

  <footer>
    <div
      class="h-[350px] py-[10px] w-full flex fkex-row bg-gray-300 justify-around"
    >
      <div class="flex flex-col w-[20%] bg-gray-200 rounded-[15px]"></div>
      <div class="flex flex-col w-[20%] bg-gray-200 rounded-[15px]"></div>
      <div class="flex flex-col w-[20%] bg-gray-200 rounded-[15px]"></div>
      <div class="flex flex-col w-[20%] bg-gray-200 rounded-[15px]"></div>
    </div>
  </footer>
</template>
<script setup>
import SubmitPage from "./components/SubmitPage.vue";
import ListCard from "./components/ListCard.vue";
import { ref } from "vue";
const btns = ref(["Page1", "Page2", "Page3", "Page4"]);
</script>
<style scoped></style>
