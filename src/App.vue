<template>
<div id="app">
    <app-header></app-header>
    <transition name="slide">
        <router-view></router-view>
    </transition>
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
@import '~@/styles/_fonts.scss';

body {
    margin: 0 auto;
    font-family: 'Lato', sans-serif;
}

#app {

}

.slide-enter-active,
.slide-leave-active {
    transition: opacity .5s
}

.slide-enter,
.slide-leave-to {
    opacity: 0;
    visibility: hidden;
}

</style>
