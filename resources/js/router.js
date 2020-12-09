import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";


Vue.use(Router);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("./views/Dashboard.vue")
      },
      {
        path: "categories",
        name: "categories",
        component: () => import("./views/Categories.vue")
      },
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('./views/authentication/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/authentication/Login.vue')
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('./views/authentication/ResetPassword.vue')
  }

];

const router = new Router({
  routes: routes,
  linkActiveClass: "active"
});

export default router;
