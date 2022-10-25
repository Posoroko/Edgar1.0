import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Search from '@/views/Search'
import AskEdgar from '@/views/AskEdgar'
import Buttons from '@/views/component library/Buttons'
import Sections from '@/views/component library/Sections'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    conponent: Search
  },
  {
    path: '/ask-edgar',
    name: 'AskEdgar',
    component: AskEdgar
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
