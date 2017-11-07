<template>
<footer role="contentinfo" class="app-footer">
    <div class="app-footer__wrap">
        <p class="app-footer__paragraph copyright">© 2017 martijndevalk.nl</p>
        <p class="app-footer__paragraph follow">Follow me
            <a href="#"><svg class="svg-icon"><use xlink:href="#icon-instagram"></use></svg></a>
            <a href="#"><svg class="svg-icon"><use xlink:href="#icon-twitter"></use></svg></a>
            <a href="#"><svg class="svg-icon"><use xlink:href="#icon-500px"></use></svg></a>
        </p>
    </div>
</footer>
</template>

<script>
export default {

};
</script>

<style lang="scss">

.app-footer {
    width: 100vw;

    &__wrap {
        padding: 2rem;
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: space-between;
    }

    &__paragraph {
        margin: 0;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: 700;
        color: $dark-gray;
    }

    .copyright {

    }

    .follow {
        a {
            margin: 0 0.3rem;

            .svg-icon {
                width: 28px;
                height: 20px;
                color: $dark-gray;
            }
            &:last-child .svg-icon {
                width: 34px;
            }
        }
    }
}
</style>
