import { createApp, h } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { createApolloProvider } from "@vue/apollo-option";
import apolloClient from "./vue-apollo";
import App from "./App.vue";
import Articles from "./containers/Articles";

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

const routes = [{ path: "/", component: Articles }];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

const app = createApp({
  render: () => h(App),
});

app.use(router);
app.use(apolloProvider);
app.mount("#app");