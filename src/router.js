import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import( './views/Test.vue')
    },
    {
      path: '/manage',
      component: () => import('./views/manage.vue'),
      children: [
        {
          path: '/adminList',
          component: () => import('./views/adminList.vue'),
          meta: ['数据管理', '管理员列表']
        },
        {
          path: '/explain',
          component: () => import('./views/explain.vue'),
          meta: ['说明', '说明']
        }
      ]
    }
  ]
})
