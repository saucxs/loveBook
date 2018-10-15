import Vue from 'vue'
import Router from 'vue-router'
import Shelf from '@/view/shelf';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'shelf',
      component: Shelf
    },
  ]
})
