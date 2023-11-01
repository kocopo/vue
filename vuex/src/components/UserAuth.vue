<template>
    <p v-if="loginStatus">You are logged in as {{ loginName }}</p>
    <p v-else > You are logged out</p>
    <input type="text" v-model="name">
    <button @click="login(name)">Login</button>
    <button @click="logout">Logout</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {mapGetters, mapActions} from 'vuex'

export default defineComponent({
    data(){
        return{
            name: ""
        }
    },
    computed:{
        ...mapGetters(['loginStatus', 'loginName']),    
    },
    methods:{
        ...mapActions(['login', 'logout'])
    }
})
</script>

<style scoped>

</style>