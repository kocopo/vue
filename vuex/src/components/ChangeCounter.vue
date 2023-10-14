<template>
    <button @click="addOne">Add 1</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    methods:{
        addOne(){
            this.$store.commit('increment');
        }
    }
})
</script>

<style scoped>

</style>