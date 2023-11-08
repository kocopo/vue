<template>
    <div class="categories">
        <category-column v-for="category in categories" :key="category.name" :category="category"></category-column>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import CategoryColumn from './CategoryColumn.vue'

export default defineComponent({
    components: {
        CategoryColumn
    },
    computed:{
        ...mapGetters(['categories'])
    }
})
</script>

<style scoped>
.categories{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 99%;
}
</style>