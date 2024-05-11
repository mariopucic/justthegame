import Vue from 'vue'
import VueRouter from 'vue-router'
import EmailInput from '../components/EmailInput.vue'
import PasswordInput from '../components/PasswordInput.vue'
import Registration from '../components/Registration.vue'
import Buttons from '../components/Buttons.vue'
import ForgotPasswordButton from '../components/ForgotPasswordButton.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/email',
    name: 'email',
    component: () => import('../views/EmailInput.vue')
  },
  {
    path: '/password',
    name: 'password',
    component: () => import('../views/PasswordInput.vue')
  },
   {
    path: '/buttons',
    name: 'buttons',
    component: () => import('../views/Buttons.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../views/ForgotPassword.vue')
  }
]

export default router
