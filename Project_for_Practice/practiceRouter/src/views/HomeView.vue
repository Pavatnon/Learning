<script setup>
  import {ref, onMounted} from 'vue'
  import {useUserStore} from '../stores/UserData'

  const UserData = useUserStore();

  const isUpdated = ref(false)
  const fristName = ref('');
  const lastName = ref('');

  const update = async()=>{
    isUpdated.value = false
    
    await new Promise((resolve) => {
      setTimeout(resolve,2000);
    });

    const fromData = {
      fristName: fristName.value,
      lastName: lastName.value
    }
    UserData.changeUserData(fromData);
    isUpdated.value = true;
  }
</script>

<template>
  <div class="container">
    <div class="showInfo">
      <h1>Home</h1>
      <div>
        <p>Fristname: {{ fristName }}</p>
        <p>Lastname: {{ lastName }}</p>
        <p v-if="isUpdated">Updated</p>
      </div>
    </div>
    <div class="inputInfo">
        Fristname: <input type="text" v-model="fristName"><br><br>
        Lastname : <input type="text" v-model="lastName">
    </div>
    <button @click="update()">Update</button>
  </div>
</template>
<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    gap: 15px;
  }
  .showInfo {
    text-align: center;
  }
  .showInfo > div{
    width: 320px;
    text-align: start;
  }
  .inputInfo {
    width: 320px;
    text-align: start;
  }
</style>
