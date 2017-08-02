import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Photography from '@/pages/Photography';
import Animations from '@/pages/Animations';
import Cinemagraphs from '@/pages/Cinemagraphs';
import Videos from '@/pages/Videos';

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/photography',
        name: 'Photography',
        component: Photography
    },
    {
        path: '/animations',
        name: 'Animations',
        component: Animations
    },
    {
        path: '/cinemagraphs',
        name: 'Cinemagraphs',
        component: Cinemagraphs
    },
    {
        path: '/videos',
        name: 'Videos',
        component: Videos
    }]
});
