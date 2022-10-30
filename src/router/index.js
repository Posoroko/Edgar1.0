import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import AskEdgar from '@/views/AskEdgar'
import { auth } from '@/firebase/config'

// auth guard

const requireAuth = (to, from, next) => {

  let user = auth.currentUser
  
  if(!user) {
    console.log("userin auth guard: ", user)
    next({name: 'Home' })
  } else {
    console.log("userin auth guard: ", user.uid)
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ask-edgar',
    name: 'AskEdgar',
    component: AskEdgar,
    beforeEnter: requireAuth
  }
]

const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes })

export default router
