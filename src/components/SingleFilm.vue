<script>



export default {
    name: "SingleFilm",

    props: {
        details: Object
    }
}

</script>

<template>
    <div class="container-films">
        <div>
            <img src="" alt="">
        </div>

        <div class="stats">
            <p>{{ details.original_title }}</p>
            <h3>{{ details.title }}</h3>
            <h4>{{ details.vote_average }} </h4>
            <h5 :class="details.original_language === 'en' ? 'america' : ''">{{ details.original_language }} </h5>

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

    .america {
        text-align: center;
        background-image: url(../../public/icons8-usa-48.png);
        background-repeat: no-repeat;
        background-size: 30px;
        background-position-y: center;
        background-position-x: center;
    }

}
</style>