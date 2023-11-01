<template>
  <base-container title="Toto" v-if="loginStatus">
    <h3>{{ counter }}</h3>
    <the-counter></the-counter>
    <favourite-value></favourite-value>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container>
    <user-auth></user-auth>
  </base-container>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {mapGetters} from 'vuex';
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default defineComponent({
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
    UserAuth
  },
  computed:{
    counter(){
      return this.$store.state.counter;
    },
    ...mapGetters(['loginStatus'])
  },
  methods:{
    addOne(){
      //this.$store.commit('increase', {value:10});
      //this.$store.commit({
      //  type: 'increase',
      //  value: 10
      //});
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10
      });
    }
  }
});
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
