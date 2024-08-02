<script setup>
    import { defineProps } from "vue";
    defineProps({
        activePage: Number,
        maxPage: Number,
        changePage: Function
    })
</script>
<template>
    <div class="flex w-full justify-center">
        <div class="join">
            <button v-if="activePage -1 > 0" class="join-item btn" @click="changePage(activePage - 1)">
                «
            </button>
            <button class="join-item btn">Page {{ activePage }} / {{ maxPage }}</button>
            <button v-if="activePage + 1 <= maxPage" class="join-item btn" @click="changePage(activePage + 1)">
                »
            </button>
        </div>
    </div>
</template>