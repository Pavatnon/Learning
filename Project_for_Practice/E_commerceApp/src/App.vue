<script setup>
  import {RouterView} from 'vue-router'
  import { onMounted } from 'vue';
  import {UseUserProductStore} from '@/stores/user/product'
  import {useEventStore} from '@/stores/event'

  const productStore = UseUserProductStore();

  const eventStore = useEventStore();

  onMounted(()=>{
    productStore.loadProduct();
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