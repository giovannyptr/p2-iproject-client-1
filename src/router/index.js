import Vue from "vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue"
import ProductDetail from "../views/ProductDetail.vue"
import Home from "../views/Home.vue"
import OrderPage from "../views/OrderPage.vue";


import VueRouter from "vue-router";


Vue.use(VueRouter);


const routes = [
  { 
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/products/:id",
    name: "ProductDetail",
    component: ProductDetail
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
    beforeEnter: function (to, from, next) {
      if (localStorage.getItem("access_token")) {
        next({ path: "/" })
      } else {
        next()
      }
    }
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage
  },
  {
    path: "/orderpage",
    name: "OrderPage",
    component: OrderPage,
    beforeEnter: function (to, from, next) {
      if (!localStorage.getItem("access_token")) {
        next({ path: "/" })
      } else {
        next()
      }
    }
  }

]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router