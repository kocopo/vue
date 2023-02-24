<template>
    <ul>
        <resource-item v-for="res in resources" 
        :key="res.id" 
        :title="res.title" 
        :description="res.description"
        :link="res.link" />
    </ul>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import ResourceItem from './ResourceItem.vue';
import Resource from '../model/Resource'

export default defineComponent({
    components: {ResourceItem},
    data() {
        return {
            resources : inject<Resource[]>('resources')
        }
    }
})
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>