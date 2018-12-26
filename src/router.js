import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/policies",
      name: "policies",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Policies.vue")
    },
    {
      path: "/policies/:id",
      name: "policy-detail",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/PolicyDetail.vue")
    },

    // Not Found
    {
      path: "/404",
      name: "not-found",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/PageNotFound.vue")
    },

    {
      path: "*",
      redirect: {
        name: "not-found"
      }
    }
  ]
});
