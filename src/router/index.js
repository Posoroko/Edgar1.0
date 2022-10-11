import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Buttons from '@/views/component library/Buttons'
import Sections from '@/views/component library/Sections'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: Buttons
  },
  {
    path: '/sections',
    name: 'Sections',
    component: Sections
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
