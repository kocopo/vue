<template>
  <div class="app-base">
    <the-header></the-header>
    <game-board></game-board>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GameBoard from './components/GameBoard.vue';
import TheHeader from './components/TheHeader.vue';


export default defineComponent({
  name: 'App',
  components: {
    GameBoard,
    TheHeader
  }
});
</script>

<style>
@font-face {
  font-family: 'Noto Sans';
  src: url(https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500;600;700&display=swap);
}

body{
  background-color: black;
  margin: 0;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 800;
  color: white;
}
.app-base{
  height: 95vh;
}

.biq-button{
  background-color: black;
  border-radius: 1rem;
  border: 3px solid yellow;
  color: white;
  width: 200px;
  height: 35px;
  font-family: inherit;
  font-weight: 800;
  font-size: 18px;
  transition: all 0.3s;
}

.biq-button:hover{
  color: black;
  background-color: yellow;
  cursor: pointer;
}

</style>
