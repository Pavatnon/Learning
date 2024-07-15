<script setup>
    import {useUserStore} from '../stores/UserData' 
    const UserData = useUserStore();
</script>
<template>
    <div class="container">
        <div class="showInfo">
            <h1>Profile</h1>
            <div>
                <p>Fristname: {{ UserData.fristName }} </p>
                <p>Lastname: {{ UserData.lastName }}</p>
            </div>
        </div>
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
</style>