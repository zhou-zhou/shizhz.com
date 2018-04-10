import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Writing from '@/pages/Writing'
import BlogList from '@/pages/BlogList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/write',
      name: 'Writing',
      component: Writing
    },
    {
      path: '/blogs',
      name: 'BlogList',
      component: BlogList
    }
  ]
})
