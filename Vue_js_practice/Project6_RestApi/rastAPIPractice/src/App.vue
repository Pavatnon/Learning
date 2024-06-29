<script setup>
  import Mycard from './components/Mycard.vue';

</script>

<template>
  <header class="flex flex-row justify-between w-full h-[60px] bg-gray-400 mb-10 py-1 px-10">
      <button v-for ="(tag, index) in headTag" :key ="index"
      class=" w-[250px] bg-slate-500 font-bold text-[20px] rounded-md"
      :class = "{'bg-slate-600': currentIndex == index, 'text-white': currentIndex == index}"
      @click = "currentIndex = index, console.log(currentIndex , index, headTag[currentIndex]);"
      >
      {{tag}}
      </button>

      
  </header>
  <main class="p-5">
      <div :class="{'sr-only': headTag[currentIndex] != 'Home'}">
        <h1>Home</h1>
      </div>
      <div class="grid grid-cols-6 gap-5" id = "cardPage"
          :class="{'sr-only': headTag[currentIndex] != 'Card'}">
        <Mycard v-for="data in datatest" v-bind="data" />
      </div>
      <div :class="{'sr-only': headTag[currentIndex] != 'About'}">
        <h1>About</h1>
      </div>
      <div :class="{'sr-only': headTag[currentIndex] != 'Contact'}">
        <h1>Contact</h1>
      </div>
  </main>



  <footer> 
      <div class="h-[250px] bg-red-500"></div>
  </footer>
</template>

<script>

export default {
  data() {
    return {
      currentIndex: 0,
      headTag:['Home', 'Card', 'About' , 'Contact'],
      datatest: [],

    }   
  },
  created() {
    fetch('https://jsonplaceholder.org/posts')
      .then(res => res.json())
      .then(result => {
          this.datatest = result;
      });
  }
 
}
</script>


