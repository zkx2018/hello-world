import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyMain from '@/components/Main'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/main',
    name: 'Main',
    component: MyMain
  }
]
const router = new Router({
  routes
})

export default router
