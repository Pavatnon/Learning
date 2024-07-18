import { defineStore } from "pinia";
import axios from "axios";


const BASR_URL = 'https://669729e302f3150fb66cc985.mockapi.io';

export const useTodoStore = defineStore('todo',{
    state:()=>({
        todoList:[],
        selectTodo: {},
        statusType: ['pending','doing','done']

    }),
    actions:{
        async getTodoALl(){
            try {
                const res = await axios.get(`${BASR_URL}/todos`);
                this.todoList = res.data;
            } catch (error) {
                console.log('Error', error);
            }
        },
        async getTodoById(id){
            try {
                const res = await axios.get(`${BASR_URL}/todos/${id}`);
                this.selectTodo = res.data;
            } catch (error) {
                console.log('Error', error);
            }
        },
        async addTodoList(inData){
            const bodyData = {
                name: inData,
                status: this.statusType[0]
            }
            try {
                const res = await axios.post(`${BASR_URL}/todos`, bodyData);
                this.todoList.push(bodyData);
                console.log('Add todo Complete');
            } catch (error) {
                console.log('Error',error);
            }
        },
        async removeTodo(id){
            try {
                const res = await axios.delete(`${BASR_URL}/todos/${id}`);
                console.log('remove TodoList Complete')
            } catch (error) {
                
            }
        },
        async changStatusTodo(instatus, id){
            const bodyData={
                status:instatus
            }
            try {
                const res = await axios.put(`${BASR_URL}/todos/${id}`, bodyData);
                console.log('Status todo has change');
            } catch (error) {   
                console.log('Error', error);
            }
        },
        async editTodoName(inName, id){
            const bodyData={
                name:inName
            }
            try {
                const res = await axios.put(`${BASR_URL}/todos/${id}`, bodyData);
                console.log('respon', res.data);
                console.log('Name todo has change');
            } catch (error) {   
                console.log('Error', error);
            }
        }
    }
});