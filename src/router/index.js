import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'databoard',
    path: '/',
    component: () => import('@/views/databoard/Index'),
    meta: {
      title: '看板'
    }
  }
]

const router = new VueRouter({
  base: `/${process.env.VUE_APP_Top_Path}/`,
  routes,
  mode: 'history'
})

export default router
