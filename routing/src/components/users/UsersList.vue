<template>
  <button @click="confirmInput()">Confirm</button>
  <button @click="saveChanges()">Save changes</button>
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
        users: inject<Member[]>('users'),
        changesSaved: false
    }
  },
  methods: {
    confirmInput(){
      //do something
      this.$router.push('/teams');
    },
    saveChanges(){
      this.changesSaved = true;
    }
  },
  beforeRouteEnter(to, from, next){
    console.log(to,from);
    next();
  },
  beforeRouteLeave(to, from, next){
    console.log('UserList omponent beforeRouteLeave');
    console.log(to, from);
    if(this.changesSaved){
      next();
    }else{
      const userWantsToLeave = confirm('Are you sure ? you have unsaved changes.');
      next(userWantsToLeave);
    }
  }
})
</script>

<style scoped>

</style>