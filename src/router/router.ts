import Vue from 'vue'
import Router from 'vue-router'
import createStore from '../store/store'
import UserVuexModule from '../store/UserModule'

Vue.use(Router)

export function createRouter() {
  const store = createStore()
  const router = new Router({
    routes: [
      {
        path: '/',
        name: 'home',
        component: async () => await import ('../pages/home.vue')
      }, {
        path: '/login',
        name: 'login',
        component: async () => await import ('../pages/login.vue')
      }, {
        path: '/secret',
        name: 'secret',
        component: async () => await import('../pages/secret.vue'),
        meta: { auth: true },
      }
    ],
    mode: 'history',
  })
  router.beforeEach((to, from, next) => {
    if (to.meta.auth) {
      UserVuexModule(store).isLogin().then(() => {
        next()
      }).catch(() => {
        next({ path: '/login' })
      })
    } else {
      next()
    }
  })
  return router
}
