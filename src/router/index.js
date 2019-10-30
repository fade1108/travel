import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('@/components/Home')
  }, {
    path: '/city',
    name: 'City',
    component: () => import('@/components/city/City.vue')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/components/detail/Detail.vue')
  }, {
    path: '/nike',
    name: 'Nike',
    component: () => import('@/components/nike/Nike.vue')
  }],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
