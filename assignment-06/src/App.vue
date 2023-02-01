<template>
  <user-data @data-submit="setData"></user-data>
  <active-user :age="age" :username="username"></active-user>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';

export default defineComponent({
  name: 'App',
  components: {ActiveUser, UserData},
  data(){
    return{
      age: 0,
      username: ''
    }
  },
  methods: {
    setData(username: string, age:number){
      this.username = username;
      this.age = +age;
    }
  },
});
</script>

<style>

</style>
