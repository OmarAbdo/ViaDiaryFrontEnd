import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue' // Example component

const routes = [
    { path: '/', component: HelloWorld }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router