<script setup>
  import {RouterView} from 'vue-router'
  import { onMounted } from 'vue';
  import {useCartStore} from '@/stores/user/cart'

  const cartStore = useCartStore();

  onMounted(()=>{
    cartStore.loadCart();
  })
</script>
<template>
    <RouterView />
</template>
<style scoped>

</style>