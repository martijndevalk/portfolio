<template>
<footer role="contentinfo" class="app-footer">
    <p class="copyright">© 2017 martijndevalk.nl</p>
    <p class="follow">Follow
        <a href="#"><svg class="svg-icon"><use xlink:href="#icon-instagram"></use></svg></a>
        <a href="#"><svg class="svg-icon"><use xlink:href="#icon-twitter"></use></svg></a>
        <a href="#"><svg class="svg-icon"><use xlink:href="#icon-500px"></use></svg></a>
    </p>
</footer>
</template>

<script>
export default {

};
</script>

<style lang="scss">

.app-footer {
    margin: 0 auto;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1fr;
    grid-gap: 20px;
    // position: fixed;
    // bottom: 0;
    width: 100%;
    align-content: center;
    .copyright {
        grid-column: 2/3;
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: 700;
        display: block;
    }
    .follow {
        grid-column: 3/3;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        text-align: right;
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: 700;
        a {
            margin: 0.3rem;
            .svg-icon {
                width: 28px;
                height: 20px;
            }
            &:last-child .svg-icon {
                width: 34px;
            }
        }
    }
}
</style>
