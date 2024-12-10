import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import SignupPage from '../views/SignupPage.vue';
import MainPage from '../views/MainPage.vue';

const routes = [
  { path: '/', name: 'LoginPage', component: LoginPage }, // Changed login page to default
  { path: '/signup', name: 'SignupPage', component: SignupPage },
  { 
    path: '/home', 
    name: 'MainPage', 
    component: MainPage, 
    meta: { requiresAuth: true } // Protect the home page
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guard to protect home page
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('jwt'); // Check for JWT in localStorage
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ path: '/' }); // Redirect to login if not authenticated
  } else {
    next();
  }
});

export default router;
