<script setup>
    import Loading from '@/components/Loading.vue';
    import {useTodoStore} from '../stores/todo.js'
    import { ref,onMounted, computed } from 'vue';
    import { RouterLink } from 'vue-router';
    
    const useTodo = useTodoStore();
    const todoText = ref('');
    const isLoad = ref(false);

    const  getStatus = ref('');
    const tabActive = ref(0);

    onMounted(async ()=>{
        try{
            isLoad.value = true;
            await useTodo.getTodoList();
        }catch(error){
            console.log('Error', error);
        }
        isLoad.value = false;
    });

    const filterTodoVar = computed(()=>{
        return useTodo.todoList.filter((item)=> item.status === getStatus.value);
    })
    const addTodo = async (name) =>{
        isLoad.value = true;
        try {
            await useTodo.addTodo(name);
            todoText.value ='';
        } catch (error) {
            console.log('Error',error);
        }
        isLoad.value = false;
    }
    const deleteTodo = async (id) =>{
        isLoad.value = true;
        try {
            isLoad.value = true;
            await useTodo.deleteList(id);
            await useTodo.getTodoList();
        } catch (error) {
            console.log('Error', error);
        }
        isLoad.value = false;
    }
    const editstats = async(even, id)=>{
        isLoad.value = true;
        try{
            if(even.target.checked){
                await useTodo.editStatus(useTodo.status[2],id);
            }else{
                await useTodo.editStatus(useTodo.status[1],id);
            }
        }catch(error){
            console.log('Error', error);
        }
        await useTodo.getTodoList();
        isLoad.value = false;
    }
    const statusChange = (status)=>{
        getStatus.value = status;
    }
    

</script>
<template>
    <div class ="mb-10">
        <div class="text-3xl font-extrabold text-center">Todo List</div>
        <div class="flex my-4">
            <input class="input input-bordered w-full" type="text" v-model="todoText">
            <button class="btn btn-primary ml-4" 
                    @click="addTodo(todoText)"
                    :disabled="todoText === ''">
                Add
            </button>
        </div>
        <div role="tablist" class="tabs tabs-boxed w-1/2 mx-auto">
            <a v-for="(status,index) in useTodo.status" role="tab" 
                class="tab" :key="index"
                @click="tabActive = index, statusChange(status)"
                :class="tabActive === index? 'tab-active': ''">
            {{status}}
            </a>
        </div>
        <div v-for="(todo) in filterTodoVar" :key ="todo.id" 
            class="flex items-center text-xl font-bold justify-between mt-4"> 
            <div class="form-control">
                <label class="cursor-pointer label">
                    <input type="checkbox" 
                        :checked="todo.status ==='done'" 
                        class="checkbox checkbox-success" 
                        @change="editstats($event, todo.id)"/>
                </label>
            </div>
            <div class="w-9/12">
                <p :class="todo.status ==='done'? 'line-through decoration-red-600' : ''">
                    {{ todo.name }}
                </p>  
            </div>
            <div>
                <RouterLink :to = "{name:'editpage' , params: {id: todo.id}}">
                    <button class="editBtn btn btn-square btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                            <!-- !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/>
                        </svg>
                    </button>
                </RouterLink>
                <button  v-if="todo.status  ==='done'" 
                    class="ml-4 delete-btn btn btn-square btn-outline" 
                    @click="deleteTodo(todo.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
                        <!-- !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                        <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <div v-if="isLoad">
        <Loading />
    </div>
</template>
<style scoped>
    .editBtn{
        fill: white;
    }
    .editBtn:hover{
        fill: rgb(190, 190, 190);
    }
    .delete-btn{
        fill: rgb(255, 67, 67);
    }
    .delete-btn:hover{
        fill: rgb(255, 44, 44);
    }
</style>