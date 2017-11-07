<template>
<div class="introduction">
    <article class="">
        <h1>Introduction</h1>
        <p>I am a creative front-end developer based in Naarden, The Netherlands with over ten years' industry experience. I have worked for multiple digital agencies like ICATT, Poort80, eFocus and DigitasLBi on a wide variety of projects for local and global clients.</p>
        <p>I specialize in front-end web development where my interest is more towards the creative part of this discipline.</p>
        <p>My core values are structured code, attention to detail, and an understanding of my clients' needs. I love to work with the newest technologies.</p>
        <p>At this moment I work at Valtech in Amsterdam.</p>
    </article>

    <div class="duotone">
        <svg viewBox="0 0 500 500" >
            <defs>
                <filter id="duotone-filter">
                <feColorMatrix
                    type="matrix"
                    values="1  0  0  0  0
                            1  0  0  0  0
                            1  0  0  0  0
                            0  0  0  1  0" />
                </filter>
            </defs>

            <image filter="url(#duotone-filter)" xlink:href="~@/assets/pasfoto-square.jpg" x="0" y="0" height="100%" width="100%" preserveAspectRatio="xMidYMid slice" />

        </svg>
    </div>
</div>
</template>

<script>
import { Power4, TimelineLite } from 'gsap';
export default {
    data: function () {
        return {
            duotoneElm: '.duotone',
            showIntroTl: new TimelineLite(),
            introHeading: '.introduction h1',
            introParagraphs: '.introduction p'
        };
    },
    methods: {
        duotone: function (color1, color2) {
            const matrix = document.querySelector('feColorMatrix');

            let value = [];

            value = value.concat(
            [color1[0] / 256 - color2[0] / 256, 0, 0, 0, color2[0] / 256]);

            value = value.concat(
            [color1[1] / 256 - color2[1] / 256, 0, 0, 0, color2[1] / 256]);

            value = value.concat(
            [color1[2] / 256 - color2[2] / 256, 0, 0, 0, color2[2] / 256]);

            value = value.concat([0, 0, 0, 1, 0]);

            matrix.setAttribute('values', value.join(' '));
        },
        showIntro: function () {
            this.showIntroTl
                .set(this.introHeading, { y: '50%', autoAlpha: 0 })
                .set(this.introParagraphs, { y: '50%', autoAlpha: 0 })
                .set(this.duotoneElm, { autoAlpha: 0 })
                .to(this.introHeading, 1, { y: '0%', autoAlpha: 1, ease: Power4.easeOut })
                .staggerTo(this.introParagraphs, 1, { y: '0%', autoAlpha: 1, ease: Power4.easeOut }, 0.2, '-=0.6')
                .to(this.duotoneElm, 2, { autoAlpha: 1, ease: Power4.easeOut }, '-=1.0');
/*

this.showIntroTl
.set(introTxt, {
    css: { position: 'fixed', top: cardPosY, left: cardPosX }
})
.to(newCard, 1, { y: -cardPosY, x: -cardPosX, ease: Power4.easeOut })
.to(newCard, 1, {
    css: { width: '100vw', height: '100vh' },
    ease: Power4.easeOut,
    onComplete: () => {
        this.$router.push({
            name: 'Card',
            params: {
                projectname: cardId
            }
        });
    }
});
 */
        }
    },
    mounted: function () {
        // this.duotone([240, 14, 46], [25, 37, 80]);
        this.showIntro();
    }
};
</script>

<style lang="scss">

.introduction {
    padding: 6rem 0;
    display: grid;
    grid-template-columns: 2fr 3fr 2fr 2fr;
    grid-gap: 40px;
    align-content: center;
}

article {
    grid-column: 2/3;
    h1 {
        margin: 0 0 1rem;
        font-size: 4rem;
        font-weight: 200;
        text-transform: uppercase;
    }

    p {
        margin: 0 0 1rem;
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 1.6;
    }
}

.duotone {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid $white;
    grid-column: 3/4;
    align-self: center;
    svg {
        color-interpolation-filters: sRGB;
    }
}
</style>
