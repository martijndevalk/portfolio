<template>
<div class="card-detail">
    <div class="lead">
        <h1>Card</h1>
        <p>These are the most recent projects I've been working on.</p>
    </div>
    <figure>
        <img :src="imgLarge" :alt="heading">
        <figcaption>{{ heading }} - {{ subheading }}</figcaption>
    </figure>
</div>
</template>

<script>
import cards from '@/data.json';

export default {
    data: function () {
        return {
            subheading: '',
            heading: '',
            imgLarge: ''
        };
    },
    // https://router.vuejs.org/en/advanced/navigation-guards.html
    beforeRouteEnter (to, from, next) {
        var findCard = cards.find(function (card) {
            return card.projectname === to.params.projectname;
        });

        if (findCard !== undefined) {
            next(vm => vm.setData(findCard));
        } else {
            next(false);
        }
    },
    mounted: function () {

    },
    methods: {
        setData (card) {
            this.subheading = card.subheading;
            this.heading = card.heading;
            this.imgLarge = card.imgLarge;
        }
    }
};
</script>

<style lang="scss">
    .card-detail {
        width: 100%;
    }
</style>
