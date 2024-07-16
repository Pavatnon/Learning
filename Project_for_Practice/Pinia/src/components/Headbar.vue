<script setup>
    import { RouterLink } from 'vue-router';
    import {ref} from 'vue';

    const menuList = ref(['Home','EmproyeeList']);

</script>

<template>
    <div class="Navbar">
        <RouterLink 
            v-for="(menu, index) in menuList" :key="index"
            :to ="{name: `${menu}`}">
            <button>{{ menu }}</button>
        </RouterLink>
    </div>
</template>

<style scoped>
.Navbar{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 100%;
    height: 60px;
    background-color: rgba(128, 128, 128, 0.4);
    
}
button {
    font-size: 15px;
    font-weight: bold;
    width: 130px;
    height: 60px;
    border: none;
    border-radius: 10px;
    background-color: rgba(128, 128, 128, 0.2);
    
    
}
button:hover{
    background-color: rgba(128, 128, 128, 0.3);
}
</style>