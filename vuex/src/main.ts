import { createApp } from 'vue'
import Store from './store'
import App from './App.vue'



const app = createApp(App);

app.use(Store);

app.mount('#app')

