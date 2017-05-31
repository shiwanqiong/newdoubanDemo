import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Pages from '../views/Pages'
import Home from '../views/Home'
import Movies from '../views/Movies.vue'
import Books from '../views/Books.vue'
import Broadcast from '../views/Books.vue'
import Groups from '../views/Groups.vue'
import Detail from '../views/Detail.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/',
      name:'pages',
      component:Pages,
      children:[
        {
          path:'',
          redirect:'/pages/home'
        },
        {
          path:'home',
          name:'Home',
          component:Home
        },
        {
          path:'movie',
          name:'Movies',
          component:Movies
        },
        {
          path:'book',
          name:'Books',
          component:Books
        },
        {
          path:'broadcast',
          name:'Broadcast',
          component:Broadcast
        },
        {
          path:'group',
          name:'Groups',
          component:Groups
        },
        {
          path:'detail',
          name:'Detail',
          component:Detail
        }
      ]
    },
  ]
})
