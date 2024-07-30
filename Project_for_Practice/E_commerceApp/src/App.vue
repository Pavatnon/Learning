<script setup>
  import {RouterView} from 'vue-router'
  import { onMounted } from 'vue';
  import {useCartStore} from '@/stores/user/cart'
  import {useEventStore} from '@/stores/event'


  const eventStore = useEventStore();
  const cartStore = useCartStore();

  onMounted(()=>{
    cartStore.loadCart();
  })
</script>
<template>
  <!-- Main View -->
  <RouterView />

  <!-- Toas Alert -->
  <div v-if="eventStore.alert" class="toast">
    <div class="alert" :class="`alert-${eventStore.data.status}`">
      <span>{{ eventStore.data.message }}</span>
    </div>
  </div>
</template>
<style scoped>

</style>