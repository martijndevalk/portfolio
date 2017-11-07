<template>
    <div class="home">
        <app-introduction></app-introduction>
    </div>
</template>

<script>
import Introduction from '@/components/Introduction';
export default {
    components: {
        appIntroduction: Introduction
    }
};
</script>

<style lang="scss">
.home {
    &::before {
        content: '';
        top: 0;
        left: 0;
        position: fixed;
        width: 100vw;
        height: 100vh;
        // background-color: rgba(0,0,0, 0.8);
        // background-color: rgb(0,0,0);
        // mix-blend-mode: soft-light;
        z-index: -1;
    }
    &::after {
        content: '';
        top: 0;
        left: 0;
        position: fixed;
        width: 100vw;
        height: 100vh;
        // background: url('../assets/page/home.jpg') no-repeat;
        // transform: scale(1.02);
        // filter: blur(3px);
        z-index: -2;
    }
}
</style>
