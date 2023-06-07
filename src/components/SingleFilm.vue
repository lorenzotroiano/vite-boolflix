<script>



export default {
    name: "SingleFilm",

    props: {
        details: Array
    }
}

</script>

<template>
    <div class="container-films">
        <div>
            <img :src="details.poster_path" alt="">
        </div>

        <div class="stats">
            <h3>{{ details.original_title }}</h3>
            <h4>{{ details.vote_average }}</h4>
            <h5>{{ details.original_language }}</h5>
            <p>{{ details.overview }}</p>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.container-films {
    width: calc(100% / 5);
    padding: 20px;


    h3,
    h4,
    p,
    h5 {
        text-align: center;
        margin: 10px 0;
    }

    img {
        width: 220px;
    }
}
</style>