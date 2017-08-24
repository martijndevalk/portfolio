<template>
<div class="projects">
    <div class="lead">
        <h1>Projects</h1>
        <p>These are the most recent projects I've been working on.</p>
    </div>
    <div class="card-overview">
        <div class="card">
            <hgroup>
                <h2></h2>
                <h3></h3>
            </hgroup>
        </div>
    </div>
</div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.projects {
    padding: 6rem 2rem;
    .lead {
        h1 {
            margin: 0 0 0.5rem;
            font-size: 3rem;
            font-weight: 900;
            color: $queen-blue;
        }

        p {
            margin: 0 0 1rem;
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 1.6;
            color: $medium-gray;
        }
    }
    .card {

    }
}
</style>
