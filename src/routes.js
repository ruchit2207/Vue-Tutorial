import { createWebHistory, createRouter } from 'vue-router';
import HomeCompo from './components/HomeCompo.vue';
import AboutCompo from './components/AboutCompo.vue';
import PageNotFound from './components/PageNotFound.vue'
import ApiData from './components/ApiData.vue'
const routes = [
    {
        name: 'HomeCompo',
        path: '/',
        component: HomeCompo
    },
    {
        name: 'AboutCompo',
        path: '/about/:name',
        component: AboutCompo
    },
    {
        name : 'PageNotFound',
        path: '/:pathMatch(.*)*',
        component : PageNotFound
    },
    {
        name : 'ApiData',
        path : '/api',
        component : ApiData
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
