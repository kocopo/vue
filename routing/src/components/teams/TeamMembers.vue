<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item v-for="member in members" :key="member.id" :name="member.fullName" :role="member.role"></user-item>
    </ul>
    <router-link to="/teams/t2">Go to team 2</router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import UserItem from '../users/UserItem.vue';
import Member from '../model/Member';
import Team from '../model/Team';

export default defineComponent({
  components: {
    UserItem
  },
  props: {
    teamId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      teamName: '',
      members: [] as Member[],
      teams: inject<Team[]>('teams'),
      users: inject<Member[]>('users'),
    };
  },
  methods: {
    createContent(teamId: string) {
      if (this.teams && this.users) {
        const selectedTeam = this.teams.find(team => team.id === teamId);
        if (selectedTeam) {
          const members = selectedTeam.members;
          const selectedMembers: Member[] = [];
          for (const member of members) {
            const mem = this.users.find(user => user.id === member);
            if (mem) {
              selectedMembers.push(mem)
            }
          }
          this.members = selectedMembers;

        }
      }
    }
  },
  created() {
    this.createContent(this.teamId);
    console.log(this.$route.query)
  },
  beforeRouteUpdate(to,from, next){
    next();
  },
  watch: {
    teamId(newTeamId: string) {
      this.createContent(newTeamId);
    }
  }
})
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>