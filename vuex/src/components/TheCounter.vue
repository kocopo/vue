<template>
    <div>
        <h3>{{ counter }}</h3>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    computed:{
        counter(){
            return this.$store.state.counter;
        }
    }
})
</script>

<style scoped>

</style>