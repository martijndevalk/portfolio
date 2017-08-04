<template>
<div id="app">
    <app-header></app-header>
    <transition name="component-fade" mode="out-in">
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
    height: 100vh;
}

#app {

}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
