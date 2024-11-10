import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/verify-otp',
    name: 'VerifyOTP',
    component: () => import('../components/VerifyOTP.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/Dashboard.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});


router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  console.log('token', token)
  if (to.name == 'Dashboard' && !token) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router
