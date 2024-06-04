import { createWebHistory , createRouter } from "vue-router";
import HomeCompo from './components/HomeCompo.vue'
import AboutCompo from './components/AboutCompo.vue'
const routes = [
    {
        name : 'HomeCompo',
        path : '/',
        component : HomeCompo
    },
    {
        name : 'AboutCompo',
        path : '/about',
        component : AboutCompo
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes

})

export default router