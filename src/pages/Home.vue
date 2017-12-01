<template>

    <div class="grid">
        <h1 class="title">Hi!</h1>
        <p class="paragraph">I am Martijn a creative front-end developer based in Naarden, The Netherlands with over ten years' industry experience. I have worked for multiple digital agencies like ICATT, Poort80, eFocus and DigitasLBi on a wide variety of projects for local and global clients.</p>
        <img class="photo-me" src="~@/assets/pasfoto-square.jpg" alt="">
    </div>


    <!-- <app-introduction></app-introduction> -->
    <!-- <div class="grid">
        <div class="header">
            header
        </div>
        <div class="sidebar">
            sidebar
        </div>
        <div class="content">
            content
        </div>
        <div class="footer">
            footer
        </div>
        <div class="panel">
            panel
        </div>
    </div> -->

</template>

<script>
// import Introduction from '@/components/Introduction';

export default {
    components: {
        // appIntroduction: Introduction
    }
};
</script>

<style lang="scss">
// https://www.smashingmagazine.com/2017/10/naming-things-css-grid-layout/
// https://rachelandrew.co.uk/archives/2017/06/01/breaking-out-with-css-grid-explained/

:root {
  --gap: 10px;
}

.grid {
    margin: 0 auto;
    max-width: 600px;
    // grid-template-columns: 25vw 25vw 25vw;
    // grid-template-rows: 200px 100px;
    display: grid;
    grid-gap: var(--gap);
    grid:
        ".... .... photo" 150px
        "sayhi intro intro" minmax(100px, auto);
}

.title {
    margin: 0;
    font-size: 6rem;
    color: $desire;
    grid-area: sayhi;
}

.paragraph {
    grid-area: intro;
}

.photo-me {
    filter: grayscale(1) contrast(120%);
    border-radius: 50%;
    grid-area: photo;
    justify-self: end;
}














// .grid {
//     display: grid;
//     grid-gap: var(--gap);
//     grid-template-columns: 1fr [panel-start] 2fr 1fr 2fr 1fr [panel-end] 2fr;
//     grid-template-rows: 10vh [panel-start] minmax(200px, auto) 10vh [panel-end];
//     grid-template-areas:
//     "head head head head head head"
//     "side side main main main main"
//     ".... .... foot foot foot foot";
// }
//
// .header {
//     grid-area: head;
//     background-color: rgba(green, 0.5);
// }
//
// .sidebar {
//     grid-area: side;
//     background-color: rgba(yellow, 0.5);
// }
//
// .content {
//     grid-area: main;
//     background-color: rgba(purple, 0.5);
// }
//
// .footer {
//     grid-area: foot;
//     background-color: rgba(orange, 0.5);
// }
//
// .panel {
//     // grid-area: panel;
//     grid-column: main;
//     grid-row: main / foot ;
//     background-color: rgba(red, 0.5);
// }


</style>
