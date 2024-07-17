<script setup>
    import {useTodoStore} from '../stores/todo'
    import { useRoute,RouterLink } from 'vue-router';
    import { ref, onMounted } from 'vue';


    const useTodo = useTodoStore();
    const route = useRoute();
    const getID = parseInt(route.params.id);
    const todoText = ref('');
    const isLoad = ref(false);

    onMounted(async()=>{
        try {
            isLoad.value = true;
            await useTodo.getSelectTodo(getID);
            todoText.value =useTodo.selectTodo.name;
        } catch (error) {
            console.log('Error', error);
        }
        isLoad.value = false;
    });

    const editinfo = async(todoText)=>{
        try {
            useTodo.editName(todoText, getID);
        } catch (error) {
            console.log('Error', error);
        }
    }


</script>
<template>
    <h1>Edit todo ID {{ getID }}</h1>
    <div v-if="isLoad">
        <h2>Loading...</h2>
    </div>
    <div v-if="!isLoad">
        <div>
            <input type="text"  v-model="todoText">
            <button @click="editinfo(todoText)">Edit</button>
        </div>
        <div>
            <RouterLink :to="{name: 'homepage'}">
                <button>Back</button>
            </RouterLink>
            
        </div>
    </div>
</template>