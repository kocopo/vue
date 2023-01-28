<template>
    <section>
        <header><h1>My friends</h1></header>
        <ul>
            <friend-contact v-for="friend in friends" :key="friend.id" :name="friend.name" :phone-number="friend.phone" :email-address="friend.email" :is-favourite="true"/>
            
        </ul>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FriendContact from './components/FriendContact.vue';

export default defineComponent({
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: 'manuel', name: 'Manuel Lorenz', phone: '0123 456 789', email: 'manuel@lorenz.com'
        },
        {
          id: 'ota', name: 'Otakar Kočka', phone: '0123 456 78911', email: 'Otakar@kocka.com'
        }
      ]
    }
  }
});
</script>

<style>

</style>
