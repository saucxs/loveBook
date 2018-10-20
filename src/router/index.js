import Vue from 'vue'
import Router from 'vue-router'
import Shelf from '@/view/shelf';
import Category from '@/view/category';
import Rank from '@/view/rank';
import Featured from '@/view/featured';
import List from '@/view/list';
import Book from '@/view/book';
import Read from '@/view/Read';
import CatList from '@/view/catlist';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'shelf',
      component: Shelf
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/featured',
      name: 'featured',
      component: Featured
    },
    {
      path: '/list/:id',
      name: 'list',
      component: List
    },
    {
      path: '/book/:id',
      name: 'book',
      component: Book
    },
    {
      path: '/read/:id',
      name: 'read',
      component: Read
    },
    {
      path: '/catlist/:major',
      name: 'catlist',
      component: CatList
    }
  ]
})
