import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import LoginPage from "../views/LoginPage.vue";
import SignupPage from "../views/SignupPage.vue";
import ContactPage from "../views/ContactPage.vue";
import PostPage from "../views/PostPage.vue";
import EditPage from "../views/EditPage.vue";


const routes = [
  {
    path: "/", // Initial path directs to the LoginPage
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/home", // MainPage (home page)
    name: "MainPage",
    component: MainPage,
    meta: { requiresAuth: true }, // Requires authentication
  },
  {
    path: "/signup", // Signup page
    name: "Signup",
    component: SignupPage,
  },
  {
    path: "/contacts", // Contact page
    name: "Contacts",
    component: ContactPage,
  },
  {
    path: "/post", // Posting page
    name: "post",
    component: PostPage,
  },
  {
    path: "/home/EditPage/:id", // Edit page
    name: "EditPage",
    component: EditPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guard to control access
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("jwt"); // Check if JWT exists

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/"); // Redirect to LoginPage if not authenticated
  } else if (to.name === "Login" && isAuthenticated) {
    next("/home"); // Redirect to MainPage if already authenticated
  } else {
    next(); // Proceed to the requested route
  }
});

export default router;
