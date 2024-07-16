<script setup>
    import {useUserStore} from '../stores/UserStore'



    const userStore  = useUserStore();

    const deleteEmp = (index) =>{
        userStore.deleteEmployee(index);
    }

</script>
<template>
    <div class="container">
        <div>
            <h1>EmployeeList</h1>
        </div>
        <div v-if="userStore.emproyeeList.length !== 0" class="emList"> 
            <div v-for="(employee, id) in userStore.emproyeeList" :key = "id" class="card">
                
                <div class="value">
                    <p>ID: {{ id }}</p>
                    <p>Name: {{ employee.fullName }}</p>
                    <p>Email: {{ employee.email }}</p>
                </div>
                <div class="Ui">
                    <button class="EditBtn">Edit</button>
                    <button @click="deleteEmp(id)" class="DeleteBtn">Delete</button>
                </div>
                
            </div>
        </div>
    </div>
   
</template>
<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
       
    }
    .emList{
        display: grid;
        row-gap: 15px;
        column-gap: 15px;
        width: 1200px;
        grid-template-columns: repeat(4, 1fr);
    }
    
    .card{
        display: grid;
        grid-template-columns: 190px 1fr;
        width: 250px;
        padding-left: 15px;
        border: 1px solid rgba(128, 128, 128, 0.4);
        background-color: rgba(250, 235, 215, 0.6);
        border-radius: 10px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    }
    .Ui{
        display: grid;
        grid-template-rows: 1fr 1fr;

    }
    .EditBtn{
        border-top-right-radius: 10px;
        border:1px solid rgba(128, 128, 128, 0.4);
        background-color: rgb(129, 247, 118);
    }
    .EditBtn:hover{
        background-color: rgb(83, 202, 72);
    }
    .DeleteBtn{
        border-bottom-right-radius: 10px;
        border:1px solid rgba(128, 128, 128, 0.4);
        background-color: rgb(248, 93, 93);
    }
    .DeleteBtn:hover{
        background-color: rgb(252, 58, 58);
    }
  
    
</style>