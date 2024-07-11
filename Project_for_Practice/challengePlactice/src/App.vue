<template>
  <!-- SecrionForNavbar -->
  <HeadNavbar />

  <!-- mainSection -->
  <section>
    <div class="flex w-full h-screen justify-center items-center bg-gray-300">
        <div class="w-[1600px] h-[90%] bg-white rounded-lg shadow-2xl object-contain">
          <!-- content -->
          <router-view />
        </div>
    </div>
  </section>
</template>
<script setup>

</script>

