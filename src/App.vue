<template>
<div id="app">
    <div id="page-trans"></div>

    <app-header></app-header>

    <router-view></router-view>

    <app-footer></app-footer>
</div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
    name: 'app',
    components: {
        appHeader: Header,
        appFooter: Footer
    }
};
</script>

<style lang="scss">

body {
    margin: 0 auto;
    font-family: 'Lato', sans-serif;
    height: 100vh;
    background-color: $honeydew;
}

#app {

}

#page-trans {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: $queen-blue;
    z-index: 1000;
    transform: scaleX(0);
}

</style>
