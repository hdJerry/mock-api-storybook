import { createApp, h } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { setupGraphQL } from "./init";

const app = createApp({
  setup() {
    setupGraphQL();
  },
  render: () => h(App),
});

app.use(store).use(router).mount("#app");
