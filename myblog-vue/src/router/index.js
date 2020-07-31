import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blogs from "../views/Blogs"
import BlogDetail from "../views/BlogDetail";
import BlogEdit from "../views/BlogEdit";
import BlogDelete from "../views/BlogDelete";

Vue.use(VueRouter)

  const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
    {
         path: '/blogs',
         name: 'Blogs',
         component: Blogs
    },
    {
        path: '/add',
        name: 'BlogAdd',
        component: BlogEdit
    },
    {
        path: '/blog/:blogId',
        name: 'BlogDetail',
        component: BlogDetail
    },
    {
        path: '/blog/:blogId/edit',
        name: 'BlogEdit',
        component: BlogEdit
    },
    {
        path: '/blog/:blogId/delete',
        name: 'BlogDelete',
        component: BlogDelete
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
