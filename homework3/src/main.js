import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Import Vuex store
import './assets/styles.css';

createApp(App)
  .use(router)
  .use(store) // Use the Vuex store
  .mount('#app');
