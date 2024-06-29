  <script setup>
      import Headbar from './components/Headbar.vue';
      import CardCom from './components/CardCom.vue';
  </script>


<template>
  <header>
    <Headbar/>
  </header>
  <main class="grid grid-cols-1 gap-10 p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <CardCom v-for ="item in items" v-bind = "item" />
  </main>
</template>

<script>
  export default {
    data() {
      return {
        items: []
      }
    },

    created() {
      fetch('https://www.melivecode.com/api/attractions')
        .then(res => res.json())
        .then(result => {
          this.items = result
        })
    }
  }
</script>