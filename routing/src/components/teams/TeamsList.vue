<template>
    <router-view></router-view>
    <ul>
        <teams-item v-for="team in teams"
         :key="team.id" :name="team.name" :member-count="team.members.length" :id="team.id"></teams-item>
    </ul>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import TeamsItem from './TeamsItem.vue';
import Team from '../model/Team';

export default defineComponent({
    components: {
        TeamsItem,
    },
    data() {
        return {
            teams: inject<Team[]>('teams')
        }
    },
})
</script>

<style scoped>
ul {
    list-style: none;
    margin: 2rem auto;
    max-width: 40rem;
    padding: 0;
}
</style>