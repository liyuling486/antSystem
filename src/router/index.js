import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
