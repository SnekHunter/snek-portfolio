import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Projects from '../pages/Projects.vue';
import Contact from '../pages/Contact.vue';
import NotFound from '../pages/NotFound.vue';
import Posts from '../pages/post-pages/PostList.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
  { path: '/posts', component: Posts },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
