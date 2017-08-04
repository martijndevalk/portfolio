<template>
<header role="banner" class="app-header">

    <router-link to="/" class="logo">
        <img src="../assets/martijn-de-valk-logo.svg" alt="">
    </router-link>

    <nav role="navigation" class="main-nav" :class="{ active: isActive }">
        <router-link to="/Projects">Projects</router-link>
        <router-link to="/Photography">Photography</router-link>
        <router-link to="/Animations">Animations</router-link>
        <router-link to="/Cinemagraphs">Cinemagraphs</router-link>
        <router-link to="/Videos">Videos</router-link>
    </nav>

    <button type="button" name="button" class="menu" @click="toggleMenu" :class="{ active: isActive }">Menu</button>

</header>
</template>

<script>
import { TweenLite, Power4, TimelineLite } from 'gsap';

export default {
    data: function () {
        return {
            menuBtn: '.menu',
            mainNav: '.main-nav',
            isActive: false,
            menuTl: new TimelineLite()
        };
    },
    methods: {
        toggleMenu: function () {
            this.isActive = !this.isActive;

            if (this.isActive === true) {
                console.log(this.menuTl);
                console.log(TweenLite);
                this.menuTl.to(this.mainNav, 2, {
                    x: '-100%',
                    ease: Power4.easeOut
                });
            } else {

            }
        }
    }
};
</script>

<style lang="scss">
@import '~@/styles/_variables.scss';
@import '~@/styles/_mixins.scss';

.app-header {
    margin: 0 auto;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    position: sticky;
    top: 0;
    align-content: center;
    background-color: $light-gray;

    @include min-screen($large) {
        grid-template-columns: 1fr 1fr 4fr 1fr;
    }

    .logo {
        padding: 2rem 0;
        min-width: 150px;
        max-width: 250px;
        grid-column: 1/2;
        @include min-screen($large) {
            grid-column: 2/2;
        }
    }

    .menu {
        @include max-screen($large - 1) {
            grid-column: 2/2;
            width: 42px;
            height: 42px;
            align-self: center;
            justify-self: end;
            position: relative;
            z-index: 900;
        }

        @include min-screen($large) {
            display: none;
        }
    }

    nav {
        display: flex;

        @include max-screen($large - 1) {
            flex-direction: column;
            position: fixed;
            right: -100%;
            z-index: 800;
            width: 100vw;
            height: 100vh;
            background-color: $white;
        }

        @include min-screen($large) {
            justify-content: flex-end;
            grid-column: 3/4;
        }

        a {
            margin: auto 2rem;
            text-transform: uppercase;
            text-decoration: none;
            font-weight: 400;
            color: $dark-gray;
            position: relative;
            outline: 0;

            &::after {
                content: '';
                height: 50%;
                width: 110%;
                background-color: rgba($dark-gray, 0.2);
                position: absolute;
                bottom: -5%;
                left: -5%;
                z-index: -1;
                transform: scaleX(0);
                transform-origin: bottom left;
                transition: transform 400ms ease;
            }

            &:hover,
            &:focus,
            &.is-active {
                &::after {
                    transform: scaleX(1);
                }
            }
        }
    }
}

</style>
