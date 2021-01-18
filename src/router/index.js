import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Foods from "../views/Foods.vue";
import Detail from "../views/Detail.vue";
import Keranjang from "../views/Keranjang.vue";
import SuccessOrder from "../views/SuccessOrder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/foods",
    name: "Foods",
    component: Foods,
  },
  {
    path: "/foods/:id",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/keranjang",
    name: "Keranjang",
    component: Keranjang,
  },
  {
    path: "/pesanan-sukses",
    name: "SuccessOrder",
    component: SuccessOrder,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
