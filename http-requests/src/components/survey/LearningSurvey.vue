<template>
    <section>
        <base-card>
            <h2>How was you learning experience?</h2>
            <form @submit.prevent="submitSurvey">
                <div class="form-control">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" v-model.trim="enteredName" />
                </div>
                <h3>My learning experience was ...</h3>
                <div class="form-control">
                    <input type="radio" id="rating-poor" value="poor" name="rating" v-model="chosenRating" />
                    <label for="rating-poor">Poor</label>
                </div>
                <div class="form-control">
                    <input type="radio" id="rating-average" value="average" name="rating" v-model="chosenRating" />
                    <label for="rating-average">Average</label>
                </div>
                <div class="form-control">
                    <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
                    <label for="rating-great">Great</label>
                </div>
                <p v-if="invalidInput">One or more input fields are invalid. Please check your provided data.</p>
                <p v-if="error">{{ error }}</p>
                <div>
                    <base-button>Submit</base-button>
                </div>
            </form>
        </base-card>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SurveyData from '../model/SurveyData';
import axios from 'axios'

export default defineComponent({
    data() {
        return {
            enteredName: '',
            chosenRating: null as string | null,
            invalidInput: false,
            error: null as string | null
        };
    },
    emits: ['survey-submit'],
    methods: {
        submitSurvey() {
            if (this.enteredName === '' || !this.chosenRating) {
                this.invalidInput = true;
                return;
            }
            this.invalidInput = false;
            const obj = {
                userName: this.enteredName,
                rating: this.chosenRating,
            } as SurveyData;
            /* this.$emit('survey-submit', obj); */

            axios.post('https://vue-http-demo-d2ddd-default-rtdb.europe-west1.firebasedatabase.app/surveys.json',
                obj)
                .then(() => {
                        this.error = null
                        this.enteredName = '';
                        this.chosenRating = null;
                })
                .catch(error => {
                    console.log(error);
                    this.error = "Couldn't save the data !"
                });
        },
    },
})
</script>

<style scoped>
.form-control {
    margin: 0.5rem 0;
}

input[type='text'] {
    display: block;
    width: 20rem;
    margin-top: 0.5rem;
}
</style>