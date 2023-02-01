<template>
    <ul>
        <li><h2>{{ username }}</h2></li>
        <li><h3>{{ age }}</h3></li>
    </ul>
    
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'App',
  components: {},
  props:{
    username:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    }
  }
});
</script>

<style>
li{
    text-decoration: none;
}
</style>
