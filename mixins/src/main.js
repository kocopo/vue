import { createApp } from 'vue';

import App from './App.vue';
import Logger from './mixins/logger.js';


const app = createApp(App);

app.mixin(Logger);

app.mount('#app');
