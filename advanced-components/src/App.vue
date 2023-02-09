<template>
<div>
  <the-header></the-header>
  <badge-list></badge-list>
  <user-info
  :full-name="activeUser.name"
  :info-text="activeUser.description"
  :role="activeUser.role"
  ></user-info>


</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BadgeList from './components/BadgeList.vue';
import TheHeader from './components/TheHeader.vue';
import UserInfo from './components/UserInfo.vue';

export default defineComponent({
  name: 'App',
  components: {
    BadgeList, TheHeader, UserInfo
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    }
  },
});
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
