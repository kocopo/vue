<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resource</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseCard from '../UI/BaseCard.vue';
import BaseButton from '../UI/BaseButton.vue';
import ResourceTab from '../model/ResourceTab';
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
import Resource from '../model/Resource';
import ButtonMode from '../model/ButtonMode';

export default defineComponent({
    components: { BaseCard, BaseButton, StoredResources, AddResource },
    data() {
        return {
            selectedTab: 'stored-resources' as ResourceTab,
            storedResources: [
                { id: 'official-guide', title: 'Official guide', description: 'Offical vue.js documentation', link: 'https://vuejs.org' },
                { id: 'google', title: 'Google', description: 'Learn to Google', link: 'https://google.com' }
            ] as Resource[],
        }
    },
    provide() {
        return {resources: this.storedResources,
                addResource: this.addResource};
    },
    computed:{
        storedResButtonMode(): ButtonMode{
            return this.selectedTab === 'stored-resources' ? undefined : 'flat';
        },
        addResButtonMode(): ButtonMode{
            return this.selectedTab === 'add-resource' ? undefined : 'flat'
        }
    },
    methods: {
        setSelectedTab(tab: ResourceTab) {
            this.selectedTab = tab;
        },
        addResource(resource: Resource){
            this.storedResources.unshift(resource); 
            this.selectedTab = 'stored-resources';
        }
    }
})
</script>

<style scoped></style>