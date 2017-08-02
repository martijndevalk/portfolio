<template>
<header role="banner" class="app-header">

    <router-link to="/" class="logo">
        <img src="../assets/martijn-de-valk-logo.svg" alt="">
    </router-link>

    <nav role="navigation">
        <router-link to="/Projects">Projects</router-link>
        <router-link to="/Photography">Photography</router-link>
        <router-link to="/Animations">Animations</router-link>
        <router-link to="/Cinemagraphs">Cinemagraphs</router-link>
        <router-link to="/Videos">Videos</router-link>
    </nav>

</header>
</template>

<script>
export default {

};
</script>

<style lang="scss">
@import '~@/styles/_variables.scss';
@import '~@/styles/_mixins.scss';

.app-header {
    margin: 0 auto;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 4fr 1fr;
    grid-gap: 20px;
    position: sticky;
    top: 0;
    align-content: center;
    background-color: $light-gray;

    .logo {
        padding: 2rem 0;
        min-width: 150px;
        grid-column: 2/2;
    }

    nav {
        display: flex;
        justify-content: flex-end;
        grid-column: 3/4;

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
