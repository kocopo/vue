<template>
    <form @submit.prevent="submitData">
        <label for="username">Username :</label>
        <input type="text" name="" id="username" v-model="username"/>
        <label for="age">Age: </label>
        <input type="number" name="" id="age" v-model="age"/>
        <button type="submit">submit</button>
    </form>

</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'App',
  components: {},
  emits:['data-submit'],
  data() {
    return {
        age: 0,
        username: ''
    }
  },
  methods: {
    submitData(){
        this.$emit('data-submit', this.username, this.age)
    }
  }
});
</script>

<style>

</style>
