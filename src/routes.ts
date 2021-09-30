import {createRouter, createWebHistory} from 'vue-router';
import Home from './pages/home.vue'
import SignUp from './pages/sign-up.vue'
import SignIn from './pages/sign-in.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/sign-up', component: SignUp },
    {path: '/sign-in', component: SignIn },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

