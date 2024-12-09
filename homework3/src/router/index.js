import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import SignupPage from '../views/SignupPage.vue';
import PostPage from '../views/PostPage.vue';
import ContactPage from '../views/ContactPage.vue';

const routes = [
  { path: '/', name: 'MainPage', component: MainPage },
  { path: '/signup', name: 'SignupPage', component: SignupPage },
  { path: '/post', name: 'PostPage', component: PostPage},
  { path: '/contact', name: 'ContactPage', component: ContactPage},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
