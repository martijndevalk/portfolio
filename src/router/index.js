import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
// import Contact from '@/pages/Contact';
// import Overview from '@/pages/Overview';
// import Photography from '@/pages/Photography';
// import Animations from '@/pages/Animations';
// import Cinemagraphs from '@/pages/Cinemagraphs';
// import Videos from '@/pages/Videos';
// import Card from '@/pages/Card';

Vue.use(Router);

export default new Router({
    mode: 'history',
    // linkActiveClass: 'is-active',
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }
    // {
    //     path: '/overview',
    //     name: 'Overview',
    //     component: Overview
    // },
    // {
    //     path: '/contact',
    //     name: 'Contact',
    //     component: Contact
    // },
    // {
    //     path: '/photography',
    //     name: 'Photography',
    //     component: Photography
    // },
    // {
    //     path: '/animations',
    //     name: 'Animations',
    //     component: Animations
    // },
    // {
    //     path: '/cinemagraphs',
    //     name: 'Cinemagraphs',
    //     component: Cinemagraphs
    // },
    // {
    //     path: '/videos',
    //     name: 'Videos',
    //     component: Videos
    // },
    // {
    //     path: '/card/:projectname',
    //     name: 'Card',
    //     component: Card
    // }
    ]
});
