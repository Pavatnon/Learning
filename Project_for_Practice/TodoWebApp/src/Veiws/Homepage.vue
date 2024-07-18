<script setup>
    import LoadScene from '../components/LoadScene.vue';
import {useTodoStore} from '../Store/todoData'
    import { ref, computed, onMounted, watch } from 'vue';

    const todoData = useTodoStore();

    const todoText = ref('');
    const editTodoText = ref('');
    const stautsType = ref('pending');

    const isLoading = ref(false);
    const isEdit= ref(false);
    const isEmpty = ref(false);
    
    onMounted( async()=>{
        isLoading.value = true;
        try{
            await todoData.getTodoALl();
        }catch(error){
            console.log('Error', error)
        }
        isLoading.value = false;
    });
    
    const getListbytype = computed(()=>{
        return todoData.todoList.filter((item) => item.status === stautsType.value);
    });

    watch(getListbytype, ()=>{
        getListbytype.value.length === 0 ? isEmpty.value = true : isEmpty.value = false;
    })

    const addTodo = async()=>{
        try{
            await todoData.addTodoList(todoText.value);
        }catch(error){
            console.log('Error', error);
        }
        
    }
    const letsTodo = async(id) =>{
        isLoading.value = true;
        try {
            await todoData.changStatusTodo(todoData.statusType[1],  id);
            await todoData.getTodoALl();
        } catch (error) {
            console.log('Error', error);
        }
        isLoading.value = false;
    }
    const getTodoId = async(id)=>{
        isLoading.value = true;
        try {
            await todoData.getTodoById(id);
            await todoData.getTodoALl();
        } catch (error) {
            console.log('Error', error);
        }
        isEdit.value= true;
        isLoading.value = false;
    } 
    const removeTodo = async(id) =>{
        isLoading.value = true;
        try {
            await todoData.removeTodo(id);
            await todoData.getTodoALl();
        } catch (error) {
            console.log("Error", error);
        }
        isLoading.value = false;
    }
    const checkboxStatus= async(even, id)=>{
        isLoading.value = true;
        try {
            if(even.target.checked){
                await todoData.changStatusTodo(todoData.statusType[2],  id);
            }else{
                await todoData.changStatusTodo(todoData.statusType[1],  id);
            }
            await todoData.getTodoALl();
        } catch (error) {
            console.log("Error", error);
        }
        isLoading.value = false;
    }
    const editTodoName = async(id) => {
        isLoading.value = true;
        try {
            if (editTodoText.value !== '') {
                await todoData.editTodoName(editTodoText.value, id);
            }
            if (editTodoText.value === '') {
                isLoading.value = false;
                isEdit.value = false;
            }
            await todoData.getTodoALl();
            editTodoText.value = '';
        } catch (error) {
            console.log("Error", error);
        }
        isEdit.value = false;
        isLoading.value = false;
    }   
    const getStatusType = (type) =>{
        stautsType.value = type;
    }
</script>
<template>
    <div v-show ="isLoading">
        <LoadScene />   
    </div>
    <div class="flex flex-col w-full ">
        <div class="mb-4">
            <h1 class="text-3xl font-extrabold text-center">TodoList</h1>
        </div>
        <div class="flex flex-row">
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">What you want todo ?</span>
                </div>
                <input type="text" placeholder="Type here" class="input input-bordered w-full"  v-model="todoText"/>
            </label>
            <div class="flex items-end">
                <button :disabled="!todoText" class="btn btn-outline btn-success ml-4" @click="addTodo()">Add</button>
            </div>
        </div>
        <div class="m-4">
            <div role="tablist" class="tabs tabs-boxed">
                <a v-for="status in todoData.statusType" role="tab" class="tab" 
                    :class="stautsType === status? 'tab tab-active' : ''"
                    @click="getStatusType(status)">{{status}}</a>
                
            </div>
        </div>
        <div v-for="todo in getListbytype" class="flex justify-between items-center m-1" :key="todo.id">
            <input v-if="todo.status === todoData.statusType[1]  || todo.status === todoData.statusType[2] " type="checkbox" :checked="todo.status === todoData.statusType[2]" 
                    class="checkbox checkbox-success" 
                    @change="checkboxStatus($event, todo.id)"/>
            <label v-if="isEdit && todo.id === todoData.selectTodo.id" class="input input-bordered flex items-center gap-2 w-10/12">
                <input type="text" class="grow" :placeholder="todo.name" v-model="editTodoText"/>
                <button @click = "isEdit = false">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="25" height="25" style="fill: white;">
                        <!-- !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                </button>
                <button @click="editTodoName(todo.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="25" height="25" style="fill: white;">
                        <!-- !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                    </svg>
                </button>
            </label>        
            <p v-else class="w-10/12 font-bold text-lg">
                {{ todo.name }}
            </p>
            <button v-if="todo.status === todoData.statusType[0]" class="flex gap-2" @click="getTodoId(todo.id)" :disabled="isEdit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="25" height="25" style="fill: white;">
                    <!-- !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                    <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 125.7-86.8 86.8c-10.3 10.3-17.5 23.1-21 37.2l-18.7 74.9c-2.3 9.2-1.8 18.8 1.3 27.5L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM549.8 235.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417L441.1 287.8l71 71L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"/>
                </svg>
            </button>
            <button v-if="todo.status === todoData.statusType[0]" class="flex gap-2" @click="letsTodo(todo.id)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25" height="25" style="fill: white;">
                    <!-- !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                    <path d="M113 433L273 273c9.4-9.4 9.4-24.6 0-33.9L113 79c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l143 143L79 399c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0zm192 0L465 273c9.4-9.4 9.4-24.6 0-33.9L305 79c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l143 143L271 399c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z"/>
                </svg>
            </button>
            <button v-if="todo.status === todoData.statusType[2]" @click="removeTodo(todo.id)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="25" height="25" style="fill: red;">
                    <!-- !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                    <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                </svg>
            </button>
        </div>
        <div v-if="isEmpty" class="text-center">
            <p class="text-2xl font-bold">---- Empty -----</p>
        </div>



    </div>
</template>
