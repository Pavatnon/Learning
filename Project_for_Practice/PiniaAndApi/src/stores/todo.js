
import { defineStore } from 'pinia'
import axios from 'axios';

const BASE_URL = "https://669729e302f3150fb66cc985.mockapi.io";

export const useTodoStore = defineStore('todo',{
  state:()=> ({
    todoList: [],
    selectTodo: {},
    status:['pending','doing','done']
  }),
  actions:{
    async getTodoList(){
      try {
        const res = await axios.get(`${BASE_URL}/todos`);
        this.todoList = res.data;
      } catch (error) {
        console.log('Error',error);
      }

    },
    async getSelectTodo(id){
      try {
        const res = await axios.get(`${BASE_URL}/todos/${id}`);
        this.selectTodo = res.data;
      } catch (error) {
        console.log('Error',error);
      }

    },
    async addTodo(todoData){
      const bodyData= {
        name: todoData,
        status: 'pending'
      }
      try {
        const res = await axios.post(`${BASE_URL}/todos`, bodyData); 
        this.todoList.push(res.data);
      } catch (error) {
        console.log('Error',error);
      }
    },
    async editStatus(data,id){
        const bodyData = {
          status: data
        }
        try {
          const res = await axios.put(`${BASE_URL}/todos/${id}`, bodyData);
        } catch (error) {
          console.log('Erroe',error);
        }
    },
    async deleteList(id){
      try {
        const res = await axios.delete(`${BASE_URL}/todos/${id}`);
      } catch (error) {
        console.log('Error',error);
      }
  
    },
    async editName(name, id){
      const data = {
        name: name
      }
      try {
        const res = await axios.put(`${BASE_URL}/todos/${id}`,data);
      } catch (error) {
        console.log('Error', error);
      }
    }
  }
});
