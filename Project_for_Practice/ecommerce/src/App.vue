<script setup>
    import { onMounted } from "vue";
    import { RouterView } from 'vue-router'
    import { useCartStore } from '@/stores/cart';
    const cartStore = useCartStore();

    onMounted(()=>{
            cartStore.loadCart()
    })
</script>
<template>
    <RouterView/>
</template>