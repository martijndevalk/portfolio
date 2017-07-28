<template>
<div class="app-header">
    <router-link to="/" class="logo">
        <img src="../assets/martijn-de-valk-logo.svg" alt="">
    </router-link>
    <nav role="navigation">
        <router-link to="/Projects">Projects</router-link>
        <router-link to="/Photography">Photography</router-link>
        <router-link to="/Animations">Web animations</router-link>
        <router-link to="/Cinemagraphs">Cinemagraphs</router-link>
        <router-link to="/Videos">Videos</router-link>
    </nav>
</div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
    .app-header {
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 4fr;
        grid-gap: 20px;
        max-width: 1300px;
        height: 100px;
        position: sticky;
        top: 0;
        align-content: center;
        background-color: #F3F3F3;
    }

    .logo {
        // background-color: red;

    }

    nav {

        display: flex;
        justify-content: flex-end;
        a {
            margin: auto 2rem;
            text-transform: uppercase;
            color: #000;
        }
    }
</style>
