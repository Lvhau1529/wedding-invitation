import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  type RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/invitation',
    name: 'Invitation',
    component: () => import('@/views/InvitationView.vue')
  }
]

// if hash, use hash history
const history = window.location.hash ? createWebHashHistory() : createWebHistory()
const router = createRouter({
  history,
  routes
})

export default router
