import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view'
import Login from '@/view/main/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'machineList',
          name: 'machineList',
          component: () => import('@/view/main/machineList')
        }]
    }
  ]
})
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}