import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [{
      path: '/home',
      name: 'TabCard',
      component: () => import('../components/TabCard.vue')
    }]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router