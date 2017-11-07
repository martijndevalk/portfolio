<template>
<header role="banner" class="app-header">

    <router-link to="/" class="logo">
        <div class="svg-container">
            <svg class="svg-icon">
                <use xlink:href="#icon-martijn-de-valk-logo"></use>
            </svg>
        </div>
    </router-link>

</header>
</template>

<script>
export default {
    data: function () {
        return {

        };
    },
    mounted: function () {

    },
    methods: {

    }
};
</script>

<style lang="scss">

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
}

</style>
