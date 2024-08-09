<script setup>
    import {useRoute} from 'vue-router'
    import {ref, watch, computed} from 'vue';
    
    import {useMenuStore} from '@/stores/menu'

    
    const menuStore = useMenuStore()
    const route = useRoute()

    const menuTypeSelected = ref('รายการอาหารทั้งหมด')

    const showMenu = computed(()=>{
        let getMenu = []
        if(menuTypeSelected.value === 'รายการอาหารทั้งหมด'){
            getMenu = menuStore.menulist
        }else{
            getMenu = menuStore.fillerMenu(menuTypeSelected.value)
        }
        return getMenu
    })


    watch(() => route.query.type, (newQuery) => {
        if(newQuery){
            menuTypeSelected.value = newQuery
        }else{
            menuTypeSelected.value = 'รายการอาหารทั้งหมด'
        }
    }, {immediate: true})

</script>
<template>
    <h1 class="text-2xl font-bold mb-10">Menu: {{ menuTypeSelected }} </h1>
    
    <ShowItem :showList="showMenu"/>

</template>