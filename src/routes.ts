import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './pages/home.vue'
import SignUp from './pages/sign-up.vue'
import SignIn from './pages/sign-in.vue'
import CoachPanel from './pages/coach-panel.vue'
import MenteePanel from './pages/mentee-panel.vue'
import NotFound from './pages/not-found.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/sign-up', component: SignUp },
    {path: '/sign-in', component: SignIn },
    {path: '/coach-panel', component: CoachPanel },
    {path: '/mentee-panel', component: MenteePanel},
    {path: '/:pathMatch(.*)*', component: NotFound },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
