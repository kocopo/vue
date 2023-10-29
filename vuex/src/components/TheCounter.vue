<template>
    <div>
        <h3>{{ finalCounter }}</h3>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
    computed:{
/*         counter(){
            return this.$store.getters.finalCounter;
        } */
        ...mapGetters(['finalCounter'])
    }
})
</script>

<style scoped>

</style>