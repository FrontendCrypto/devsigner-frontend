import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createGtm } from '@gtm-support/vue-gtm';
import store from './store';
import axios from 'axios';
// import VueMeta from 'vue-meta';

import 'normalize.css';
import '@/assets/styles/global.scss';

// Create an Axios instance with your Strapi API base URL
const strapiApi = axios.create({
  baseURL: import.meta.env.VITE_APP_STRAPI_API_URL, // Replace with your Strapi API base URL
});

const app = createApp(App);

// Use Axios instance as a Vue prototype
app.config.globalProperties.$axios = strapiApi;

// app.use(VueMeta);
app.use(router);
app.use(store);
app.use(
  // https://www.npmjs.com/package/@gtm-support/vue-gtm

  createGtm({
    id: import.meta.env.VITE_APP_GTM_ID, // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
    // queryParams: {
    //   // Add URL query string when loading gtm.js with GTM ID (required when using custom environments)
    //   gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
    //   gtm_preview: 'env-4',
    //   gtm_cookies_win: 'x',
    // },

    defer: true,
    compatibility: false,
    nonce: '2726c7f26c', // Will add `nonce` to the script tag

    // @TODO, disable if cookies not accepted //

    enabled: import.meta.env.VITE_APP_GTM_ENABLE, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
    debug: import.meta.env.VITE_APP_GTM_DEBUG, // Whether or not display console logs debugs (optional)
    // loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
    vueRouter: router, // Pass the router instance to automatically sync with router (optional)
    ignoredViews: ['homepage'], // Don't trigger events for specified router names (optional)
    trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
  })
);
app.mount('#app');
