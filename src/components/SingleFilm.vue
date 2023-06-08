<script>



export default {
    name: "SingleFilm",

    props: {
        details: Object
    },



    methods: {
        convertToIntegerNum(n) {


            let stars = n / 10;
            const star = Math.round(stars * 5);
            return star;




        }
    }
}



</script>

<template>
    <div class="container-films">


        <div class="stats">
            <p>Film</p>
            <img class="poster" :src="'http://image.tmdb.org/t/p/w500/' + details.poster_path" alt="">
            <p>{{ details.original_title }}</p>
            <h3>{{ details.title }}</h3>



            <i v-for="(star, index) in 5" class="fa-regular fa-star"
                :class="convertToIntegerNum(details.vote_average) >= index ? 'active' : ''">
            </i>



            <div class="row">
                <img :src="'../../img/' + details.original_language + '.png'" alt="non esiste">
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.container-films {
    width: calc(100% / 5);
    padding: 20px;
    // display: flex;
    // justify-content: center;




    h3,
    h4,
    p,
    h5 {
        text-align: center;
        margin: 10px 0;
    }

    .poster {
        width: 200px;
    }

    img {
        width: 40px;
        margin: 0 auto;

    }

    .row {
        display: flex;
        justify-content: center;
    }

    .fa-star {
        padding: 5px;
    }

    .active {
        color: yellow;
    }


}
</style>