<template>
  <div class="app">
    <header>
      <div class="order">
        <button @click="handleClick('title')">order by title</button>
        <button @click="handleClick('location')">order by location</button>
        <button @click="handleClick('salary')">order by salary</button>
      </div>
    </header>
    <JobList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import Job from './types/Job';
import JobList from './components/JobList.vue';
import OrderTerm from './types/OrderTerm';

export default defineComponent({
  name: 'App',
  components: { JobList },
  setup() {
    /*     const state = reactive({
          name: 'Link',
          age: 25 as number | string
        })
        
        state.name = 999 //cannot change type
        state.age = '26'
    
        return {
          ...toRefs(state)
        } */

    /*     const name = ref('Link');
        const age = ref<string | number>(26);
    
        return {name, age}; */

    const jobs = ref<Job[]>([
      { title: 'Farmworker', location: 'Ranch', salary: 30000, id: '1' },
      { title: 'quarryman', location: 'death mountain', salary: 40000, id: '2' },
      { title: 'flute player', location: 'the lost woods', salary: 35000, id: '3' },
      { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
      { title: 'prison guard', location: 'gerudo valley', salary: 32000, id: '5' }
    ]);

    const order = ref<OrderTerm>('title');

    const handleClick = (term: OrderTerm) => {
      order.value = term;
    }

    return { jobs, handleClick, order };
  },
  methods: {

  },
});
</script>

<style>
header {
  text-align: center;
}

header .order {
  margin-top: 20px;
}

button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>
