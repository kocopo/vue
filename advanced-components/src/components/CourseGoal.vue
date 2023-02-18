<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
        <slot :item="goal"></slot>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            goals: ['finish the course', 'take a break']
        }
    },
})
</script>

<style scoped></style>