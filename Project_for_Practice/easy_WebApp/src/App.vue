<script setup>
  import { ref, onMounted, computed, watch } from 'vue';

  const fristName = ref('testName');
  const lastName = ref('testLastname');
  const email = ref('test@Email.com');

  const showfristName = ref('');
  const showlastName = ref('');
  const showemail = ref('');

  const isValid = ref(false);
  const errors = ref({});

  const isLoad = ref(false);
  const iscomplete = ref(false);

  onMounted(()=>{
    showfristName.value = fristName.value;
    showlastName.value = lastName.value;
    showemail.value = email.value;
  })
  watch([fristName, lastName, email],()=>{
    isValid.value = false;
    errors.value = {};
    if (!nameValid(fristName.value)) {
      isValid.value = true;
      errors.value.erName = 'กรอกชื่อให้ถูกต้อง'
    }
    if (!nameValid(lastName.value)) {
      isValid.value = true;
      errors.value.erLast = 'กรอกนามสกุลให้ถูกต้อง'
    }
    if (!emailValid(email.value)) {
      isValid.value = true;
      errors.value.erMail = 'กรอกEmailให้ถูกต้อง'
    }
    
  })


  const nameValid = (name) => {
    let res = /\d/;
    return !res.test(name);
  }
  const emailValid = (email) =>{
    return email.includes('@');
  }
  const fullName = computed(()=>{
    return `${showfristName.value} ${showlastName.value}`;
  })

  const isUpdate = async(name, lastname, email) => {
    isLoad.value = true;
    iscomplete.value = false;

    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    }).then(()=>{
      isLoad.value = false;
      iscomplete.value = true;

      if (iscomplete.value) {
      showfristName.value = name;
      showlastName.value = lastname;
      showemail.value = email;
    }
    });
  }
</script>

<template>
    <div class="container">
      <div class="from">
        <h1>Submitfrom</h1>
        <div class="inputarea">
          <p>Ftistname</p>
          <input type="text" v-model="fristName">
          <p class="error" v-if="errors">{{ errors.erName }}</p>
          <p>Lastname</p>
          <input type="text"  v-model="lastName">
          <p class="error" v-if="errors">{{ errors.erLast }}</p>
          <p>Email</p>
          <input type="text" v-model="email">
          <p class="error" v-if="errors">{{ errors.erMail }}</p>
          <div class="Ui">
            <button :disabled="isValid" @click="isUpdate(fristName,lastName,email)">Update</button>
            <div>
              <div v-if="isLoad">Loadind...</div>
              <div v-if="iscomplete">Update Completed</div>
            </div>
          </div>
        </div>
      </div>
      <div class="output">
        <h1>Profile</h1>
        <div class="outarea">
          <p>Name: {{ fullName }}</p>
          <p>Email: {{ showemail }} </p>
        </div>
      </div>
    </div>
</template>
<style scoped>
  .container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
  }
  .from {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .output {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .inputarea > input {
    width: 100%;
    padding-inline: 10px;
  }
  .inputarea > p {
    align-self: self-start;
  }
  .inputarea {
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    width: 320px;
    border: 1px  solid gray;
    border-radius: 15px;
  }
  .Ui {
    margin-top: 20px;
  }
  .Ui > div{
    margin-top: 20px;
  }
  .outarea {
    display: flex;
    flex-direction: column;
    width: 320px;
    font-size: 20px;
  }
  .error {
    font-size: 15px;
    color: red;
  }
</style>