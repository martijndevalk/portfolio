<template>
<div class="projects">
    <div class="lead">
        <h1>Projects</h1>
        <p>These are the most recent projects I've been working on.</p>
    </div>
    <div class="card-overview">
        <div class="card" @click="showCard" :data-project="card.projectname" v-for="card in cards">
            <img class="card__visual" :src="card.imgSmall" alt="">
            <hgroup>
                <h2 class="card__subheading">{{ card.subheading }}</h2>
                <h3 class="card__heading">{{ card.heading }}</h3>
            </hgroup>
        </div>
    </div>
</div>
</template>

<script>
import cards from '@/data.json';
import { TimelineLite } from 'gsap';

export default {
    data: function () {
        return {
            showCardTl: new TimelineLite(),
            cards
        };
    },
    mounted: function () {
        console.log(cards);
    },
    methods: {
        showCard: function (e) {
            let card = e.currentTarget;
            let cardId = card.dataset.project;

            this.$router.push({
                name: 'Card',
                params: {
                    projectname: cardId
                }
            });

            // let card = e.currentTarget;
            // let cardId = card.dataset.project;
            // let cardPosX = card.getBoundingClientRect().left + window.pageXOffset;
            // let cardPosY = card.getBoundingClientRect().top + window.pageYOffset;
            // let cardWidth = card.clientWidth;
            // let cardHeight = card.clientHeight;
            //
            // const newCard = document.createElement('div');
            //
            // newCard.className = 'new-card';
            // newCard.style.width = cardWidth + 'px';
            // newCard.style.height = cardHeight + 'px';
            // newCard.style.left = cardPosX + 'px';
            // newCard.style.top = cardPosY + 'px';
            //
            // card.parentNode.appendChild(newCard);
            //
            // this.showCardTl
            // .set(newCard, {
            //     css: { position: 'fixed', top: cardPosY, left: cardPosX }
            // })
            // .to(newCard, 1, { y: -cardPosY, x: -cardPosX, ease: Power4.easeOut })
            // .to(newCard, 1, {
            //     css: { width: '100vw', height: '100vh' },
            //     ease: Power4.easeOut,
            //     onComplete: () => {
            //         this.$router.push({
            //             name: 'Card',
            //             params: {
            //                 projectname: cardId
            //             }
            //         });
            //     }
            // });

/*
            const elPosX = this.getBoundingClientRect().left + window.pageXOffset,
                  elPosY = this.getBoundingClientRect().top + window.pageYOffset,
                  xPos = event.pageX - elPosX,
                  yPos = event.pageY - elPosY,
                  elRipple = document.createElement('div');

            elRipple.className = 'waves-ripple';
            elRipple.style.left = xPos + 'px';
            elRipple.style.top = yPos + 'px';

            let elmX = e.clientX;
            let elmY = e.clientY;

            console.log(elmX, elmY);
*/
        }
    }
};
</script>

<style lang="scss">
.projects {
    margin: 0 auto;
    padding: 6rem 2rem;
    .lead {
        h1 {
            margin: 0 0 0.5rem;
            font-size: 3vw;
            font-weight: 900;
            color: $dark-gray;
        }

        p {
            margin: 0 0 1rem;
            font-weight: 400;
            font-size: 1.4vw;
            line-height: 1.6;
            color: $medium-gray;
        }
    }
}

.card-overview {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
    
    .card {
        position: relative;
        cursor: pointer;

        &__visual {
            display: block;
            width: 100%;
        }

        hgroup {
            padding: 1.5rem 2rem;
            background-color: $white;
        }

        &__subheading {
            margin: 0;
            font-size: 1rem;
            font-weight: 100;
            text-transform: uppercase;
            color: $medium-gray;
        }
        &__heading {
            margin: 0;
            font-size: 2rem;
            color: $dark-gray;
        }
    }
}
</style>
