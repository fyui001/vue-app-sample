import Vue from 'vue'
import Router from 'vue-router'
import createStore from '../store/store'

Vue.use(Router)

export function createRouter() {
  const store = createStore()
  const router = new Router({
    routes: [
      {
        path: '/',
        name: 'home',
        component: async () => await import ('../views/Home.vue')
      },{
        path: '/about',
        name: 'about',
        component: async () => await import ('../views/About.vue')
      }
    ],
    mode: 'history',
  })
  return router
}
