<template>
  <base-container title="Toto"><h1>Hello</h1></base-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseContainer from './components/BaseContainer.vue';

export default defineComponent({
  components: {
    BaseContainer
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
