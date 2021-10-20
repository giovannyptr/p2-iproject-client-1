import Vue from "vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue"
import ProductDetail from "../views/ProductDetail.vue"


import VueRouter from "vue-router";


Vue.use(VueRouter);


const routes = [
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage
  },
  {
    path: "/productdetail",
    name: "ProductDetail",
    component: ProductDetail
  }

]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router