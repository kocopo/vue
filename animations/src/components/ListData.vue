<template>

    <transition-group tag="ul" name="user-list">
        <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
    </transition-group>
    <div>
        <input type="text" v-model="addUsername" ref="us">
        <button @click="addUser">Add user</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data(){
        return {
            users: ['Ota', 'Pavel', 'Karel', 'Verča'],
            addUsername : ''
        }
    },
    methods: {
        removeUser(user: string){
            this.users = this.users.filter(usr=> usr !== user);
        },
        addUser(){
            this.users.unshift(this.addUsername);
        }
    }
})
</script>

<style scoped>
ul{
    list-style: none;
    margin: 1rem 0;
    padding:0;
}
li{
    border: 1px solid grey;
    padding: 1rem;
    text-align: center;
    cursor: pointer;
}
.user-list-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}
.user-list-enter-active {
    transition: all 1s ease-out;
}
.user-list-leave-from,
.user-list-enter-to {
    opacity: 1;
    transform: translateX(0);
}
.user-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.user-list-leave-active {
    transition: all 1s ease-in;
    position: absolute;
}
.user-list-move{
    transition: transform 0.8s ease-out;
}
</style>