<template>
<div id="app">

    <app-header></app-header>

    <main role="main">
        <transition name="slide">
            <router-view></router-view>
        </transition>
    </main>

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

html {
    width: 100vw;
    overflow-x: hidden;
    box-sizing: border-box;
}

*, *::before, *::after {
    box-sizing: inherit;
}

body {
    margin: 0 auto;
    font-family: 'Lato', sans-serif;
    // overflow-x: hidden;
    // overflow-y: scroll;
}

#app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

main {
    background-color: $white;
    position: relative;
    flex: 1;
}

.shape-overlays {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

    path:nth-of-type(1) { fill: #c4dbea; }
    path:nth-of-type(2) { fill: #4c688b; }
    path:nth-of-type(3) { fill: #2e496a; }
}

.slide-leave-active,
.slide-enter-active {
    // background-color: $white;
    transition: 1s;
    position: absolute;
    top: 0;
    left: 0;
}
.slide-enter {
    transform: translate(100%, 0);
}
.slide-leave-to {
    transform: translate(-100%, 0);
}

</style>
