<script setup>
  import { ref,  reactive, computed, watch, onMounted} from 'vue';
  import {useUserStore} from '../stores/UserStore';

  const userStore  = useUserStore();
  const fristName = ref('');
  const lastName = ref('');
  const email = ref(''); 

  const isVaid = ref(false);
  const errors = ref({});

  onMounted(()=>{
    if(fristName.value === ''){
      isVaid.value = true;
      errors.value.fristName = 'กรุณากรอกชื่อ'
    }
    if(lastName.value === ''){
      isVaid.value = true;
      errors.value.lastName = 'กรุณากรอกนามสกุล'
    }
    if(email.value === ''){
      isVaid.value = true;
      errors.value.email = 'กรุณากรอกอีเมลล์'
    }
  });
  watch([fristName, lastName, email],()=>{
    isVaid.value = false;
    errors.value = {};
     

    if (fristName.value !== '') {
        if(!nameValid(fristName.value)){
          isVaid.value = true;
          errors.value.fristName = 'กรุณากรอกชื่อให้ถูกต้อง';
        }
    }
    if (lastName.value !== '') {
        if(!nameValid(lastName.value)){
          isVaid.value = true;
          errors.value.fristName = 'กรุณากรอกนามสกุลให้ถูกต้อง';
        }
    }
    if (email.value !== '') {
        if(!emailValid(email.value)){
          isVaid.value = true;
          errors.value.email = 'กรุณากรอกอีเมลล์ให้ถูกต้อง';
        }
    }

    if(fristName.value === ''){
      isVaid.value = true;
      errors.value.fristName = 'กรุณากรอกชื่อ'
    }
    if(lastName.value === ''){
      isVaid.value = true;
      errors.value.lastName = 'กรุณากรอกนามสกุล'
    }
    if(email.value === ''){
      isVaid.value = true;
      errors.value.email = 'กรุณากรอกอีเมลล์'
    }
  });

  const nameValid = (name)=>{
    let res  = /\d/;
    return !res.test(name);
  };
  const emailValid = (email)=>{
    return email.includes('@');
  };

  const fullName = computed(()=>{
    return `${fristName.value} ${lastName.value}`;
  });

  const register = ()=>{
    const employeeVal = reactive({
      fullName: fullName.value,
      email: email.value
    });
    

    userStore.regisEmploye(employeeVal);
  }
  
</script>
<template>
  <div class= "container ">
    <div>
      <h1>Register Employee</h1>
    </div>
    <div>
        <p>FristNmae:</p>
        <input type="text" v-model="fristName">  <span v-if="errors">{{errors.fristName }}</span>
        <p>LastNmae:</p>
        <input type="text" v-model="lastName"> <span v-if="errors">{{errors.lastName }}</span>
        <p>Email:</p>
        <input type="text" v-model="email"> <span v-if="errors">{{ errors.email }}</span>
    </div>
    <div class="validation">
      <button :disabled="isVaid" @click="register()">Resister</button>
    </div>
  </div>
</template>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
  }
  .validation{
    margin-top: 20px;
    text-align: center;
    width: 175px;
  }
  button{
    width: 175px;
  }
  span{
    color: red;
    font-size: 15px;
    margin-left: 15px;
  }
</style>
