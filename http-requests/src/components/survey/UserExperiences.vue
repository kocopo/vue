<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.userName"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SurveyResult from './SurveyResult.vue';
import SurveyData from '../model/SurveyData';
import axios from 'axios';


export default defineComponent({
    components: { SurveyResult },
    data() {
      return {
        results: [] as SurveyData[] 
      }
    },
    methods: {
      loadExperiences(){
        axios.get('https://vue-http-demo-d2ddd-default-rtdb.europe-west1.firebasedatabase.app/surveys.json')
            .then(response => {
                if(response.status === axios.HttpStatusCode.Ok){
                  const results: SurveyData[] = [];
                  for(const id in response.data){
                    results.push({id:id, userName: response.data[id].userName, rating: response.data[id].rating})
                  }
                  this.results = results;
                }
            });
      }
    },
})
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>