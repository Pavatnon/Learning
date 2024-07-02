<template>
    <div>
        {{ massage }}
    </div>
</template>
<script setup>
import { ref ,onMounted } from 'vue';
const massage = ref('Loading....');

onMounted(()=>{
    setTimeout(()=>{
        massage.value = 'Hello, Vue 3!';
    },2000);
});
    
</script>
