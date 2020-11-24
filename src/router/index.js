import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('../components/layout/Content.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/Index.vue'),
      },
      {
        path: '/message',
        name: 'message',
        component: () => import('../views/Message.vue'),
      },
      {
        path: '/info',
        name: 'index',
        component: () => import('../views/Info.vue'),
      },
      {
        path: '/gzdb',
        name: 'gzdb',
        component: () => import('../views/index/Gzdb.vue'),
      },
      {
        path: '/kqdk',
        name: 'kqdk',
        component: () => import('../views/index/Kqdk.vue'),
      },
      {
        path: '/pgd',
        name: 'pgd',
        component: () => import('../views/index/Pgd.vue'),
      },
      {
        path: '/tj',
        name: 'tj',
        component: () => import('../views/index/Tj.vue'),
      },
      {
        path: '/jk',
        name: 'jk',
        component: () => import('../views/index/Jk.vue'),
      },
      {
        path: '/gqj',
        name: 'gqj',
        component: () => import('../views/index/Gqj.vue'),
      },
      {
        path: '/bpbj',
        name: 'bpbj',
        component: () => import('../views/index/Bpbj.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
