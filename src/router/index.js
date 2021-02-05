import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstPart from "@/views/FirstPart";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FirstPart',
    component: FirstPart
  }
]

const router = new VueRouter({
  mode: 'history',
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 1000, y: 0 }
  // },
  base: process.env.BASE_URL,
  routes
})

export default router
