<template>
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
})
</script>

<style scoped>

</style>