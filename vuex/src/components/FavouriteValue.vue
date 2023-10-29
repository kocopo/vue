<template>
    <div>
        <h3>{{ counter }}</h3>
        <p>We do more here ...</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    computed:{
        counter(){
            return this.$store.getters.normalizedCounter;
        }
    }
})
</script>

<style scoped>

</style>