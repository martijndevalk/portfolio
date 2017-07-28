import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Projects from '@/components/Projects';
import Photography from '@/components/Photography';
import Animations from '@/components/Animations';
import Cinemagraphs from '@/components/Cinemagraphs';
import Videos from '@/components/Videos';

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
