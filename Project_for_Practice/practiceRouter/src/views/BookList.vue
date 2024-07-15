<script setup>
    import {useBookStore} from '../stores/BookData'
    import { RouterLink } from 'vue-router';
    import { ref, onMounted } from 'vue';

    const bookData = useBookStore();
    const bookcolleted = ref([{bookname:'', bookauthor:''}]);

    onMounted(()=>{
        bookcolleted.value = bookData.booklist;
    })


</script>
<template>
    <div class="container">
        <div>
            <h1>Booklist</h1>
        </div>
        <div  v-if="bookData.booklist.length - 1 !== 0" class="booklist">
            <RouterLink 
                v-for="(book, index) in bookcolleted.length - 1" 
                :key="book.id"
                :to = "{name: 'BookDetail' , params: {id: index + 1}}">
                <button>
                    <div class="card">
                        <h1>{{bookcolleted[index + 1].bookname}}</h1>
                        <h3>{{bookcolleted[index + 1].bookauthor}}</h3>
                    </div>
                </button>
            </RouterLink>
        </div>
        <div class="noti" v-else>
            <h2>Empty BookList</h2>
        </div>
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
    .booklist {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        row-gap: 15px;
        column-gap: 15px;
    }
    .card{
        width: 250px;
        height: 300px;
        border: 1px solid gray;
        border-radius: 15px;
        padding: 10px;
        text-align: center;
    }
    .card > h3{
        margin-top: 200px;
    }
    .noti{
        text-align: center;
    }
</style>