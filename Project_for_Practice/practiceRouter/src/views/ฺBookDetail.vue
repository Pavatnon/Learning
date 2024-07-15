<script setup>
import { useRoute } from 'vue-router';
import {useBookStore}from '../stores/BookData'
import { ref } from 'vue';

const route = useRoute();
const bookData = useBookStore();
const id = ref(route.params.id);
</script>
<template>
    <div class="container">
        <h1>Bookname: {{bookData.booklist[id].bookname }}</h1>
        <h1>BookAuthor: {{bookData.booklist[id].bookauthor }}</h1>
        <h1>BookID: {{ id }}</h1>
    </div>
</template>
<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        align-items: center;
        padding: 20px;
    }
</style>