<template>
<div id="app">
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

<style>

body {
    margin: 0 auto;
}

#app {

}
</style>
