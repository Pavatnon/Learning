<script setup>
    import {useRoute} from 'vue-router'
    import {ref, watch, onMounted} from 'vue';
    
    import {useMenuStore} from '@/stores/menu'
    
    const menuStore = useMenuStore()
    const route = useRoute()

    const menuTypeSelected = ref('')

    onMounted(()=>{
        menuStore.menulistfillter
    })
    watch(() => route.params.id, (newquery) => {
        if(newquery){
            menuTypeSelected.value = newquery
        }else{
            menuTypeSelected.value = 'รายการอาหารทั้งหมด'
        }
    }, {immediate: true})

</script>
<template>
    <h1 class="text-2xl font-bold">Menu: {{ menuTypeSelected }} </h1>
</template>