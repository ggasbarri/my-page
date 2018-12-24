import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: "#26C6DA",
    secondary: "#0097A7",
    accent: "#2962FF",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50"
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
