<script setup>
    import {useBookStore} from '../stores/BookData'
    import { ref, watch, onMounted } from 'vue';

    const bookData = useBookStore();
    const bookName = ref('');
    const bookAuthor = ref('');

    const isvalid = ref(false);
    const errors = ref({})
    onMounted(()=>{
        if (bookName.value === '') {
            errors.value.bookname = 'กรุณากรอชื่อหนังสือ'
            isvalid.value = true;
        }
        if (bookAuthor.value === '') {
            errors.value.bookauthor = 'กรุณากรอชื่อผู้แต่ง'
            isvalid.value = true;
        }
    })
    watch([bookName,bookAuthor],()=>{
        isvalid.value = false;
        errors.value = {};
        if (bookName.value === '') {
            errors.value.bookname = 'กรุณากรอชื่อหนังสือ'
            isvalid.value = true;
        }
        if (bookAuthor.value === '') {
            errors.value.bookauthor = 'กรุณากรอชื่อผู้แต่ง'
            isvalid.value = true;
        }
    })
    const addBook = ()=>{
        const bookObj = {
            bookname: bookName.value,
            bookauthor:bookAuthor.value
        }
        bookData.addBookData(bookObj);
    }
</script>
<template>
    <div class="container">
        <div>
            <h1>ADD BOOK</h1>
        </div>
        <div class="input">
            <p>Book Name</p>
            <input type="text" v-model="bookName">
            <p class="error" v-if="errors">{{ errors.bookname }}</p>
            <p>Book Author</p>
            <input type="text" v-model="bookAuthor">
            <p class="error" v-if="errors">{{ errors.bookauthor }}</p>
            <button :disabled="isvalid" @click="addBook()">Add Book</button>
        </div>
        
    </div>
</template>
<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        
        align-items: center;
    }
    .input {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: start;
        gap: 20px;
        width: 320px;
    }
    button{
        height: 30px;
    }
    .error {
        color: red;
        font-size: 15px;
    }
</style>