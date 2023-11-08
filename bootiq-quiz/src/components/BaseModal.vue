<template>
  <div v-if="open" class="backdrop" @click="$emit('close')"></div>
  <transition name="modal">
  <dialog open v-if="open" @click="$emit('close')">
    <slot></slot>
    <button @click="$emit('hideQuestion')" class="biq-button" >Schovat otázku</button>
  </dialog>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    open:{
      type: Boolean,
      required: true
    }
  },
  emits: ['close', 'hideQuestion'],
})
</script>

<style scoped>

.modal-enter-active {
  animation: modal 0.3s ease-out;
}

.modal-leave-active {
  animation: modal 0.3s ease-in reverse;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 25vh;
  left: calc(50% - 35vw);
  width: 70vw;
  height: 35vh;
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  background-color: black;
  z-index: 10;
  border: 3px solid yellow;
  color:white;
  font-weight: 600;
  font-size: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

@keyframes modal{
  from{
    opacity:0;
    transform: translateY(-50px) scale(0.5);
  }

  to{
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>