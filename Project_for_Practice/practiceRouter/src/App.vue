<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="menuBar">
      <RouterLink to="/">
        <button>Home</button>
      </RouterLink>
      <RouterLink to="/Profile">
        <button>Profile</button>
      </RouterLink>
  </nav>
  <br>
  <div>
      <RouterView />
  </div>

</template>

<style scoped>
  .menuBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    gap: 15px;

  }
</style>
