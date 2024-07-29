import { createRouter, createWebHistory } from 'vue-router'
import CreateFlyer from '../components/CreateFlyer.vue'
import ViewFlyer from '../components/ViewFlyer.vue'

const routes = [
  { path: '/', component: CreateFlyer },
  { path: '/view-flyer', component: ViewFlyer }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
