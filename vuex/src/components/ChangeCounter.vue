<template>
    <button @click="inc">Add 1</button>
    <button @click="increase({value : 11})">Add 11</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'vuex';

export default defineComponent({
    methods:{
/*         addOne(){
            this.$store.dispatch('increment');
        } */
        /* ...mapActions(['increment', 'increase']) */
        ...mapActions({
            inc: 'increment',
            increase : 'increase'
        })
    }
})
</script>

<style scoped>

</style>