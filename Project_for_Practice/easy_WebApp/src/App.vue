<script setup>
  import { ref, onMounted, watch, computed } from 'vue';
  const fristName = ref('ชื่อ');
  const lastName = ref('นามสกุล');
  const email = ref('test@MediaList.com');

  const showfristName = ref('');
  const showlastName = ref('');
  const showEmail = ref('');
  
  const errors = ref({});
  const isVali = ref(false);
  const loaded = ref(false);
  const completed =ref(false);
  onMounted(()=>{
    showfristName.value = fristName.value;
    showlastName.value = lastName.value;
    showEmail.value = email.value;
  })
  const isValidName = (name) => {
    const re = /\d/;
    return !re.test(name);
  }
  const isValidEmail= (email) => {
    return email.includes('@');
  }
  watch([fristName, lastName, email], () =>{
    
  })
  const fullName = computed(()=>{
    return `${showfristName.value} ${showlastName.value}`
  })
  const editVal = async(inName, inLast, inEmail)=>{
    loaded.value = true;
    completed.value = false;
    await(new Promise(resolve => setTimeout (resolve,2000)));
    loaded.value = false;
    completed.value = true;
    if (completed.value) {
      showfristName.value = inName;
      showlastName.value = inLast;
      showEmail.value = inEmail;
    }
  };
</script>
<template>
  <div class="container">
    <label for="submit" class="from">
        <p style="text-align: center; font-size: 30px;">SubmitFrom</p>
        <p>Fristname</p>
        <input type="text" name="fristname" v-model="fristName">
        <p class="vali" v-if="isVali">กรุณากรอก ชื่อ ให้ถูกต้อง</p>
        <p>Lasttname</p>
        <input type="text" name="lastname"  v-model="lastName">
        <p class="vali"  v-if="isVali">กรุณากรอก นามสกุล ให้ถูกต้อง</p>
        <p >Email</p>
        <input type="text" name="email"  v-model="email">
        <p class="vali"  v-if="isVali">กรุณากรอก email ให้ถูกต้อง</p>

        <div class="saveBtn">
          <button :disabled="isVali" @click="editVal(fristName,lastName,email)">SaveEdit</button>
        </div>
        <div v-if="loaded" class="loader">Loadding...</div>
        <div v-if="completed" class="complete">Complete</div>
    </label>
    <div class="output">
      <p>Name: {{ fullName }}</p>
      <p>Email: {{ showEmail }}</p>
    </div>
  </div>
</template>
<style scoped>
  .container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
  }
  .from{
    background-color: rgba(128, 128, 128, 0.322);
    border-radius: 15px;
    width: 320px;
    padding: 20px;
  }
  input{
    height: 30px;
    border-radius: 15px;
    padding-inline:15px ;
    width: 280px;
    border: none;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.253);
  }
  p{
    padding-left: 10px;
    font-weight: bold;
    font-size: 25px;
  }
  .saveBtn{
    text-align: center;
    margin-top: 15px;
  }
  .saveBtn > button{
    padding: 5px 20px 5px;
    border-radius: 15px;
    border: none;
    background-color: rgba(147, 255, 114, 0.973);

    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.253);
  }
  .saveBtn > button:hover{
    background-color: rgba(98, 247, 52, 0.973);
  }
  .output{
    display: flex;
    flex-direction: column;
    width: 320px;
    
  }
  .vali{
    font-size: 12px;
    color: red;
  }
</style>