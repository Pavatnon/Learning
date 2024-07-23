<script setup>
    import {onMounted, ref, computed, watch} from 'vue';
    import {useRoute} from 'vue-router';
    import {UseUserProductStore} from '@/stores/user/product'
    import Product from '@/components/Product.vue'
    import {useCartStore} from '@/stores/user/cart'

    const cartStore = useCartStore();
    const productStore = UseUserProductStore();
    const route = useRoute();
    const searchText = ref('')
    

    watch(()=> route.query.q, (newSearchText) => {
        searchText.value = newSearchText[0];
    }, {immediate: true});

    const filterItem = computed(()=>{
        return productStore.filterProduct(searchText.value);
    })

    const handleAddtoCart = (product) =>{
        cartStore.addToCart(product);
    }
</script>
<template>
    <Userlayout>
        <div class="ml-10 my-4 text-3xl">
                <span class="font-bold">Search : </span> {{searchText}}
            </div>
        <div>
            <Product :products="filterItem"
                    :handleAddtoCart = "handleAddtoCart">
            </Product>
        </div>
        <div class="ml-10 my-4 text-3xl font-bold h-full">
           product is not found!
        </div>
    </Userlayout>
</template>