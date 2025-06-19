import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CreateView from '../views/CreateView.vue'
import PostView from '../views/PostView.vue'

const routes = [
	{ path: '/', component: HomeView },
	{ path: '/create', component: CreateView },
	{ path: '/post/:id', component: PostView, props: true }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
