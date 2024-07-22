<script setup>
    import {UseUserProductStore} from '@/stores/user/product'
    
    
    const productStore = UseUserProductStore();
</script>
<template>
    <Userlayout>
        <div class="text-3xl ml-10 font-bold my-4">
            Shoping Cart
        </div>
        <div class="container mx-auto">
            <div class="flex flex-row">
                <div class="flex-auto w-64 text-2xl font-medium bg-base-200 p-4">
                    <div class="flex">
                        <div class="flex-1">
                            <img class="w-full p-4" src="https://picsum.photos/seed/picsum/500/300">
                        </div>
                        <div class="flex-1 relative">
                            <div class="grid grid-cols-2 p-4 h-full">
                                <div class="flex flex-col justify-between">
                                    <div class="text-xl">
                                        <p class="font-bold">name</p>
                                        <p class="text-gray-600">descripttion</p>
                                        <p class="text-gray-600">price</p>
                                    </div>
                                    <p class="text-xl font-bold">status</p>
                                </div>
                                <div>
                                    <select class="select select-bordered w-1/2">
                                        <option v-for="num in 8">{{num}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="absolute top-0 right-0">
                                <button class="btn btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20">
                                        <!-- !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                    </svg>  
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-auto w-32 text-2xl font-medium bg-slate-200 p-4">Summary

                </div>
            </div>
        </div>

    </Userlayout>
</template>