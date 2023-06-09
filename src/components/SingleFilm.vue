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
        <div class="poster">
            <img class="poster" :src="'http://image.tmdb.org/t/p/w342/' + details.poster_path" alt="">
        </div>

        <div class="stats">


            <h3>{{ details.original_title }}</h3>
            <h4>{{ details.title }}</h4>



            <i v-for="(star, index) in 5" class="fa-regular fa-star"
                :class="convertToIntegerNum(details.vote_average) >= index ? 'active' : ''">
            </i>



            <div class="row">
                <img class="leng" :src="'../../img/' + details.original_language + '.png'" :alt="details.original_language">
            </div>

            <p>{{ details.overview }}</p>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.container-films {
    width: calc(100% / 5) -40px;
    padding: 20px;
    margin: 0 auto;

    position: relative;

    transition: transform 0.8s;
    // display: flex;
    // justify-content: center;
    // flex-direction: column;






    h3,
    h4,
    p {
        text-align: center;
        margin: 10px 0;
    }

    // .poster {
    //     width: 200px;
    // }

    .leng {
        width: 40px;
        margin: 0 auto;

    }

    .row {
        display: flex;
        justify-content: center;
    }

    .fa-star {
        padding: 5px;
        margin: 10px 5px;
    }

    .active {
        color: yellow;
    }



}

.poster {
    // background: linear-gradient(to left, #4364f7, #6fb1fc);


    z-index: 2;
}

.stats {
    display: none;

    padding: 20px;
    position: absolute;
    top: 10%;
    left: 0%;
    text-align: center;
    // transform: translate(-50%, -50%);



    // background: linear-gradient(to right, #4364f7, #6fb1fc);
    color: white;
    transform: rotateY(180deg);

    z-index: 1;

}

.container-films:hover {
    transform: rotateY(180deg);
    background-color: black;
}

.container-films:hover .poster {
    opacity: 0;
    // transform: rotateY(180deg);
}

.container-films:hover .stats {
    display: block;
}
</style>