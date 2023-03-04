<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
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
  data() {
    return {
      teamName: '',
      members: [] as Member[],
      teams: inject<Team[]>('teams'),
      users: inject<Member[]>('users'),
    };
  },
  created() {
    const teamId = this.$route.params.teamId;
    const selectedTeam = this.teams?.find(team => team.id === teamId);
    const members = selectedTeam?.members;
    const selectedMembers:Member[] = [];
    if(this.users){
      for(const member in members){
      const mem = this.users.find(user => user.id === member);
      if(mem){
        selectedMembers.push(mem)
      }
    }
    this.members = selectedMembers;
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