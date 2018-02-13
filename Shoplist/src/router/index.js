import Vue from 'vue'
import Router from 'vue-router'
import CardsView from '@/components/CardsView'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CardView',
      component: CardsView
    },
    {
      path: '/login',
      name: 'login',
      component: Login 
    }
  ]
})
