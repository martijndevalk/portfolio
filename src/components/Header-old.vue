<template>
<header role="banner" class="app-header">

    <router-link to="/" class="logo">
        <div class="svg-container">
            <svg class="svg-icon">
                <use xlink:href="#icon-martijn-de-valk-logo"></use>
            </svg>
        </div>
    </router-link>

    <nav role="navigation" class="main-nav" :class="{ active: menuIsActive }">
        <div class="main-nav__wrap">
            <div class="main-nav__links">
                <router-link to="/" @click.native="hideMenu">Overview</router-link>
                <router-link to="/Photography" @click.native="hideMenu">Photography</router-link>
                <router-link to="/Animations" @click.native="hideMenu">Animations</router-link>
                <router-link to="/Cinemagraphs" @click.native="hideMenu">Cinemagraphs</router-link>
                <router-link to="/Videos" @click.native="hideMenu">Videos</router-link>
                <router-link to="/Contact" @click.native="hideMenu">Contact</router-link>
            </div>
            <div class="main-nav__highlights">
                <router-link to="/card/project1" @click.native="hideMenu">Project 1</router-link>
                <router-link to="/card/project2" @click.native="hideMenu">Project 2</router-link>
            </div>
        </div>
    </nav>

    <button type="button" name="button" class="menu" @click="toggleMenu" :class="{ active: menuIsActive }">
        <span class="line line--top"></span>
        <span class="line line--middle"></span>
        <span class="line line--bottom"></span>
    </button>

</header>
</template>

<script>
import { TimelineLite } from 'gsap';

export default {
    data: function () {
        return {
            menuBtn: '.menu',
            mainNav: '.main-nav',
            menuIsActive: false,
            pageTrans: '#page-trans',
            pageTransSpeed: 0.6,
            showMenuTl: new TimelineLite(),
            hideMenuTl: new TimelineLite()
            // mediaQuery: window.matchMedia('(min-width: 1024px)')
        };
    },
    mounted: function () {
        // this.mediaQuery.addListener(this.resetMenu);
    },
    methods: {
        toggleMenu: function () {
            this.menuIsActive = !this.menuIsActive;

            if (this.menuIsActive === true) {
                this.showMenu();
            } else {
                this.hideMenu();
            }
        },
        showMenu: function () {
            this.menuIsActive = true;

            this.showMenuTl
            .set(this.pageTrans, { autoAlpha: 1, transformOrigin: '0% 0%', scaleX: 0 })
            .fromTo(this.pageTrans, this.pageTransSpeed, { scaleX: 0 }, { scaleX: 1 })
            .set(this.pageTrans, { transformOrigin: '100% 0%' })
            .set(this.mainNav, { autoAlpha: 1 })
            .fromTo(this.pageTrans, this.pageTransSpeed, { scaleX: 1 }, { scaleX: 0 })
            .staggerFromTo('.main-nav a', 1, { y: '100%' }, { y: '0%' }, 0.1, '-=1.0');
        },
        hideMenu: function () {
            this.menuIsActive = false;

            this.hideMenuTl
            .set(this.pageTrans, { transformOrigin: '100% 0%', scaleX: 0 })
            .fromTo(this.pageTrans, this.pageTransSpeed, { scaleX: 0 }, { scaleX: 1 })
            .set(this.pageTrans, { transformOrigin: '0% 0%' })
            .set(this.mainNav, { autoAlpha: 0 })
            .fromTo(this.pageTrans, this.pageTransSpeed, { scaleX: 1 }, { scaleX: 0 });
        }
        // resetMenu: function () {
        //     if (this.menuIsActive === true) {
        //         this.menuIsActive = false;
        //         this.menuTl.set(this.mainNav, { clearProps: 'all' });
        //     }
        // }
    }
};
</script>

<style lang="scss">

$menuBtnHeight: 40px;
$menuBtnWidth: 40px;

.app-header {
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: $white;
    width: 100%;

    // Site logo
    .logo {
        padding: 2rem 0;
        min-width: 150px;
        max-width: 300px;
        fill: $dark-gray;
        color: $medium-gray;
    }

    // Hamburger menu
    .menu {
        padding: 0;
        width: $menuBtnWidth;
        height: $menuBtnHeight;
        border: none;
        cursor: pointer;
        background: none;
        align-self: center;
        justify-self: end;
        position: relative;
        z-index: 900;
        transition: transform 300ms ease-out;
        color: $space-cadet;

        .line {
            left: 0;
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: currentColor;
            transition: all 300ms ease-out;
            transform-origin: center center;
            &--top {
                top: 6px;
            }
            &--middle {
                top: calc(50% - 1px);
            }
            &--bottom {
                bottom: 6px;
            }
        }

        &:hover {
            .line {
                &--top {
                    transform: translateY(4px);
                }
                &--middle {
                    transform: scaleX(0.8);
                }
                &--bottom {
                    transform: translateY(-4px);
                }
            }
        }

        &.active {
            color: $honeydew;
            transform: rotate(180deg);
            .line {
                &--top {
                    transform: translateY(12px) rotate(45deg);
                }
                &--middle {
                    opacity: 0;
                }
                &--bottom {
                    transform: translateY(-14px) rotate(-45deg);
                }
            }
            &:hover {
                transform: rotate(180deg) scale(0.9);
            }
        }
    }

    // Main nav
    .main-nav {
        position: fixed;
        top: 0;
        left: 0;
        visibility: hidden;
        opacity: 0;
        z-index: 800;
        width: 100vw;
        height: 100vh;
        background-color: darken($medium-gray, 20%);
        text-align: center;

        &__wrap {
            display: inline-flex;
            flex-direction: column;
            height: 100vh;
            justify-content: center;
        }

        &__links {
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
            a {
                margin: auto 2rem;
                text-transform: uppercase;
                text-decoration: none;
                font-size: 4vw;
                font-weight: 100;
                color: $honeydew;
                position: relative;
                outline: 0;

                &::after {
                    content: '';
                    height: 50%;
                    width: 110%;
                    background-color: $medium-gray;
                    position: absolute;
                    bottom: -5%;
                    left: -5%;
                    z-index: -1;
                    transform: scaleX(0);
                    transform-origin: bottom center;
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

        &__highlights {
            display: inline-flex;
            justify-content: center;
            a {
                padding: 2rem;
            }
        }

    }
}

</style>
