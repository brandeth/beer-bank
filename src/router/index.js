import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Favorites from '@/components/Favorites'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
    	path: '/favorites',
    	name: 'Favorites',
    	component: Favorites
    }
  ]
})
