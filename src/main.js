// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import svgxhr from 'webpack-svgstore-plugin/src/helpers/svgxhr';

const __svg__ = {
    path: './assets/**/*.svg',
    name: 'assets/svg/[hash].svg'
};

svgxhr(__svg__);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
});
