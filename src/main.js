import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import 'normalize.css';
import '@/assets/styles/global.scss'

// Create an Axios instance with your Strapi API base URL
const strapiApi = axios.create({
  baseURL: import.meta.env.VITE_APP_STRAPI_API_URL, // Replace with your Strapi API base URL
});

const app = createApp(App);

// Use Axios instance as a Vue prototype
app.config.globalProperties.$axios = strapiApi;

app.use(router);
app.use(store);

app.mount('#app');
