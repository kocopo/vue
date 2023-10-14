<template>
  <base-container title="Toto">
    <h3>{{ counter }}</h3>
    <the-counter></the-counter>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';

export default defineComponent({
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter
  },
  computed:{
    counter(){
      return this.$store.state.counter;
    }
  },
  methods:{
    addOne(){
      //this.$store.commit('increase', {value:10});
      this.$store.commit({
        type: 'increase',
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
