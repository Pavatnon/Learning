<script setup>
    import {useTodoStore} from '../stores/todo.js'
    import { ref,onMounted } from 'vue';
    import { RouterLink } from 'vue-router';
    
    const useTodo = useTodoStore();
    const todoText = ref('');
    const isLoad = ref(false);

    onMounted(async ()=>{
        try{
            isLoad.value = true;
            await useTodo.getTodoList();
        }catch(error){
            console.log('Error', error);
        }
        isLoad.value = false;
    })


    const addTodo = async (name) =>{
        try {
            await useTodo.addTodo(name);
            todoText.value ='';
        } catch (error) {
            console.log('Error',error);
        }
    }
    const deleteTodo = async (id) =>{
        try {
            isLoad.value = true;
            await useTodo.deleteList(id);
            await useTodo.getTodoList();
        } catch (error) {
            console.log('Error', error);
        }
        isLoad.value = false;
    }
    const editStauts = async (datam, id)=>{
        try {
            await useTodo.editStatus(datam,id);
        } catch (error) {
            console.log('Error', error);
        }
    }

</script>
<template>
    <div>
        <h1>TodoList</h1>
        <input type="text" v-model="todoText">
        <button @click="addTodo(todoText)">Add</button>
        <div v-if="isLoad">
            <h2>Loading...</h2>
        </div>
        <ul v-if="!isLoad">
            <li v-for="(todo,index) in useTodo.todoList" :key ="index"> 
                {{ index+1 }} .
                {{ todo.name }}

                <select v-model="todo.status"  @change="editStauts(todo.status, todo.id)">
                    <option 
                        v-for="status in useTodo.status" 
                        :value="status"
                       >{{ status }}</option>
                </select>
                
                <RouterLink :to = "{name:'editpage' , params: {id: todo.id}}">
                    <button>Edit</button>
                </RouterLink>
                <button @click="deleteTodo(todo.id)">Delete</button>
            </li>
        </ul>
    </div>
</template>