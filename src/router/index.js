import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
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
        path: '/dbsx',
        name: 'dbsx',
        component: () => import('../views/Dbsx.vue'),
      },
      {
        path: '/gzdblist',
        name: '任务待办',
        component: () => import('../views/index/GzdbList.vue'),
      },
      {
        path: '/gzdb',
        name: '任务待办',
        component: () => import('../views/index/Gzdb.vue'),
      },
      {
        path: '/kqdk',
        name: '考勤打卡',
        component: () => import('../views/index/Kqdk.vue'),
      },
      {
        path: '/pgd',
        name: '派工单',
        component: () => import('../views/index/Pgd.vue'),
      },
      {
        path: '/tj',
        name: '统计',
        component: () => import('../views/index/Tj.vue'),
      },
      {
        path: '/jk',
        name: '监控',
        component: () => import('../views/index/Jk.vue'),
      },
      {
        path: '/gqj',
        name: '工器具',
        component: () => import('../views/index/Gqj.vue'),
      },
      {
        path: '/gqj/ghsh',
        name: '工器具审核',
        component: () => import('../views/index/GqjGhsh'),
      },
      {
        path: '/bpbj',
        name: '备品备件',
        component: () => import('../views/index/Bpbj.vue'),
      },
      {
        path: '/khxx',
        name: '客户信息查询',
        component: () => import('../views/index/Khxx.vue'),
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
