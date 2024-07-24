<script setup>
    import {ref,watch} from 'vue';

    import {useRoutem} from 'vue-router';
    import { useProductStore } from '@/stores/product';

    const router = useRouter();
    const route = useRoute();
    const productStore = useProductStore();
    
    const serachText = ref('');
    const filItemProduct = ref([]);

    watch(()=> route.query.q, (newSearchText) =>{
        serachText.value = newSearchText.toLowerCase();
        filItemProduct.value = productStore.filterProduct(serachText.value);
    }, {immediate:true});

</script>
<template>
    <UserLayout>
        <div class="container mx-auto">
            <h1 class="text-3xl font-bold">Search: <span class="text-gray-600"> {{ route.query.q }} </span></h1>
        </div>
        <div v-if="filItemProduct.length > 0" class="container mx-auto">
            <Product :products = "filItemProduct"></Product>
        </div>
        <div v-else class="flex items-center justify-center h-96">
            <h1 class="text-3xl font-bold">Product is not found</h1>
        </div>
    </UserLayout>
</template>