<template>
    <form @submit.prevent="addFriend">
        <div>
            <label for="newName">Name: </label>
            <input type="text" id="newName" v-model="friend.name" />
        </div>
        <div>
            <label for="newPhone">Phone: </label>
            <input type="tel" id="newPhone" v-model="friend.phone" />
        </div>
        <div>
            <label for="newEmail">Email: </label>
            <input type="email" id="newEmail" v-model="friend.email" />
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import Friend from '@/friend/Friend'

export default defineComponent({
    data() {
        return {
            friend: {} as Friend
        };
    },
    emits: ['new-friend'],
    methods: {
        addFriend() {
            this.friend.id = new Date().toISOString();
            this.friend.isFavourite = false;
            this.$emit('new-friend', this.friend)
            this.friend = {} as Friend;
        }
    }
})
</script>
<style >

</style>