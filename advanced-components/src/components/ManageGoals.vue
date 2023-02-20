<template>
    <div>
        <h2>Manage goals</h2>
        <input type="text" name="inp" id="inp" v-model="enteredValue">
        <button @click="setGoal">Set Goal</button>
        <teleport to="body">
            <error-alert v-if="inputIsInvalid">
                <h2>Input is Invalid</h2>
                <p>Please enter some information</p>
                <button @click="confirmError">OK</button>
            </error-alert>
        </teleport>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ErrorAlert from './ErrorAlert.vue'

export default defineComponent({
    components: { ErrorAlert },
    methods: {
        setGoal() {
            if (this.enteredValue === '') {
                this.inputIsInvalid = true;
            }
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    },
    data() {
        return {
            inputIsInvalid: false,
            enteredValue: ''
        }
    },
})
</script>

<style scoped></style>