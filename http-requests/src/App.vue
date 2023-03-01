<template>
  <learning-survey ></learning-survey>
  <user-experiences ></user-experiences>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';


export default defineComponent({
  components: {
    LearningSurvey,
    UserExperiences,
  },
/*   data() {
    return {
      savedSurveyResults: [] as SurveyData[],
    };
  },
  methods: {
    storeSurvey(surveyData: SurveyData) {
      this.savedSurveyResults.push(surveyData);
      console.log(surveyData);
    },
  }, */
});
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
