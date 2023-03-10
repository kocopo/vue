<template>
  <button @click="confirmInput()">Confirm</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import Member from '../model/Member';
import UserItem from './UserItem.vue';

export default defineComponent({
    components: {
    UserItem,
  },
  data() {
    return {
        users: inject<Member[]>('users')
    }
  },
  methods: {
    confirmInput(){
      //do something
      this.$router.push('/teams');
    }
  },
  beforeRouteEnter(to, from, next){
    console.log(to,from);
    next();
  }
})
</script>

<style scoped>

</style>