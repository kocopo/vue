<template>
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <!--<div class="container">
    <users-list></users-list>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock()">Animate</button>
  </div>
  <div class="container">
    <transition :css="false" 
    @before-enter="beforeEnter" 
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @enter-cancelled="enterCancelled"
    @leave-cancelled="leaveCancelled">
      <p v-if="paraIsVisible">This is only somethimes visible</p>
    </transition>
    <button @click="toggleParagraph()">Toggle paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers()" v-if="!usersVisible">Show Users</button>
      <button @click="hideUsers()" v-else>Hide Users</button>
    </transition>
  </div>

  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import UsersList from './components/ListData.vue'

export default defineComponent({
/*   components:{
    UsersList
  }, */
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usersVisible: false,
      enterInterval: 0,
      leaveInterval: 0
    };
  },
  methods: {
    beforeEnter(el : HTMLElement){
      console.log('Before Enter');
      el.style.opacity = '0';
    },
    enter(el : HTMLElement, done: () => void){
      console.log('Enter');
      let round = 1;
      this.enterInterval = setInterval(() => {
        if(round > 100){
          done();
          clearInterval(this.enterInterval);
        }
        el.style.opacity = (round * 0.01).toString();
        round++;
      }, 20);
    },
    afterEnter(){
      console.log('After Eenter')
    },
    beforeLeave(){
      console.log('Before Leave');
    },
    leave(el:HTMLElement, done:() => void){
      let round = 100;
      this.leaveInterval = setInterval( () => {
        if(round === 0){
          done();
          clearInterval(this.leaveInterval);
        }
        el.style.opacity = (round * 0.01).toString();
        round--;
      }, 20);
      console.log('Leave')
    },
    afterLeave(){
      console.log('After leave')
    },
    enterCancelled(){
      clearInterval(this.enterInterval);
    },
    leaveCancelled(){
      clearInterval(this.leaveInterval);
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = !this.animatedBlock;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showUsers(){
      this.usersVisible = true;
    },
    hideUsers(){
      this.usersVisible = false;
    }
  },
});
</script>

<style>

.animate {
  /* transform: translateX(150px); */
  animation: slide-scale 0.3s ease-out forwards;
}

* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.fade-button-enter-from,
.fade-button-leave-to{
  opacity: 0;
}


.fade-button-enter-active{
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active{
  transition: opacity 0.3s ease-in;
}

.fade-button-leave-from,
.fade-button-enter-to{
  opacity: 1;
}

.route-enter-active{
  animation: slide-scale 0.4s ease-out;
}

.route-leave-active{
  animation: slide-scale 0.4s ease-in;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
