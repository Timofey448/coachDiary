import {createRouter, createWebHistory} from 'vue-router';
import Home from './pages/home.vue'
import SignUp from './pages/sign-up.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/sign-up', component: SignUp },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

