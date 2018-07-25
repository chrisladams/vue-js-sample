import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import ForgotPassword from '@/pages/ForgotPassword'
import About from '@/pages/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword,
    },
    {
      path: '/about-us',
      name: 'About',
      component: About,
    }
  ]
})
