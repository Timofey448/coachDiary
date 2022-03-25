import {createRouter, createWebHistory} from 'vue-router';
import Home from './pages/home.vue'
import SignUp from './pages/sign-up.vue'
import SignIn from './pages/sign-in.vue'
import CoachPanel from './pages/coach-panel.vue'
import StudentPanel from './pages/student-panel.vue'
import NotFound from './pages/not-found.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/sign-up', component: SignUp },
    {path: '/sign-in', component: SignIn },
    {path: '/coach-panel', component: CoachPanel },
    {path: '/student-panel', component: StudentPanel},
    {path: '/:pathMatch(.*)*', component: NotFound },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
