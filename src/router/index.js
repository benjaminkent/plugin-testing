import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PluginPage from '../views/PluginPage.vue'
import SpringerPage from '../views/SpringerPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/plugin',
    name: 'plugin',
    component: PluginPage
  },
  {
    path: '/springer-plugin',
    name: 'springerPlugin',
    component: SpringerPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
