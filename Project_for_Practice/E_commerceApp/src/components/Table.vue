<script setup>
    import { defineProps } from 'vue'

    defineProps({
        headers: []
    })
</script>
<template>
    <div class="overflow-x-auto w-10/12 mx-auto my-8 border-t border-gray-300">
        <table class="table">
            <thead>
                <tr class="text-md text-center">
                    <th  v-for="col in headers">{{col}}</th>
                </tr>
            </thead>
            <tbody>
                <slot></slot>
            </tbody>
        </table>
    </div>

</template>