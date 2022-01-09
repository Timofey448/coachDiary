import {createRouter, createWebHistory} from 'vue-router';
import Home from './pages/home.vue'
import SignUp from './pages/sign-up.vue'
import SignIn from './pages/sign-in.vue'
import CoachPanel from './pages/coach-panel.vue'
import NotFoundPage from './pages/not-found-page.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/sign-up', component: SignUp },
    {path: '/sign-in', component: SignIn },
    {path: '/coach-panel', component: CoachPanel },
    {path: '/:pathMatch(.*)*', component: NotFoundPage },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

