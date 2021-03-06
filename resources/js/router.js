import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import * as auth from './services/auth_service';

Vue.use(Router);

const routes = [
  {
    path: "/home",
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
      {
        path: "histories",
        name: "histories",
        component: () => import("./views/Histories.vue")
      },
      {
        path: "authors",
        name: "authors",
        component: () => import("./views/Authors.vue")
      },
    ],
    beforeEnter(to, from, next){
      if (!auth.isLoggedIn()) {
        next('/login');
      }else {
        next();
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('./views/authentication/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/authentication/Login.vue'),
    beforeEnter(to, from, next){
      if (!auth.isLoggedIn()) {
        next();
      }else {
        next('/home');
      }
    }
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('./views/authentication/ResetPassword.vue')
  },
  {
    path: '*',
    name: 'page404',
    component: () => import('./views/Page404.vue')
  }

];

const router = new Router({
  mode:'history', //cambia la URL (no aparecerá el enlace completo)
  routes: routes,
  linkActiveClass: "active"
});

export default router;
