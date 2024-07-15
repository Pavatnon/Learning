<script setup>
    import { RouterLink} from 'vue-router'
    import {ref} from 'vue'

    const menuList = ref(['Booklist', 'AddBook', 'DeleteBook']);
</script>
<template>
    <nav class="container">
        <RouterLink  v-for="menu in menuList" :key="menu" :to="{name: menu}">
            <button>{{ menu }}</button>
        </RouterLink>
    </nav>
</template>
<style scoped>
    .container{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 55px;
        background-color: rgba(128, 128, 128, 0.562);
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
    
    .container button {
        border: none;
        width: 100px;
        height: 55px;
        background-color: rgba(128, 128, 128, 0);
        font-weight: bold;
        font-size: 15px;
    }
    .container button:hover {
       
        background-color: rgba(128, 128, 128, 0.363);
    }
</style>