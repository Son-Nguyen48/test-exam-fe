import Vue from "vue";
import VueRouter from "vue-router";
import TabView from "../views/TabView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "tab",
    component: TabView
  },
  {
    path: "/gallery",
    name: "gallery",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GalleryView.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

