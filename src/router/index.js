import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../pages/Home.vue') },
  { path: '/about', component: () => import('../pages/About.vue') },
  { path: '/coming-soon', component: () => import('../pages/Coming.vue') },
  { path: '/contact', component: () => import('../pages/Contact.vue') },
  { path: '/error-pages', component: () => import('../pages/ErrorPages.vue') },
  { path: '/gallery', component: () => import('../pages/Gallery.vue') },
  { path: '/menu', component: () => import('../pages/Menu.vue') },
  { path: '/reservations', component: () => import('../pages/Reservations.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/error-pages' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
