<template>
    <div class="category-column">
        <span class="category-header">
            {{ category.name }}
        </span>
        <quiz-card v-for="question in category.questions" :key="question.id" 
        :value="question.value" 
        :question-text="question.questionText"
        :answers="question.answers"/>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import QuizCard from './QuizCard.vue';
import Category from './model/Category';

export default defineComponent({
    components:{
        QuizCard
    },
    props:{
        category:{
            type: Object as PropType<Category>,
            required: true
        }
    }
})
</script>

<style scoped>
.category-column{
    display: flex;
    flex-direction: column;
    width: 20%;
    text-align: center;
    justify-content: space-evenly;
    padding: 0 5px 0 5px;
}
.category-header{
    height: 10%;
    font-size: 1.8rem;
    padding: 10px 0 10px 0;
    background-color: yellow;
    color: black;
    border-radius: 5px;
    margin: 10px 0 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>