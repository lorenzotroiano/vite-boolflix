<script>



export default {
    name: "SingleSerie",

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
            <p>Serie Tv</p>
            <p>{{ details.original_name }}</p>
            <h3>{{ details.name }}</h3>
            <h4>{{ details.vote_average }} </h4>
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

    img {
        width: 40px;
        margin: 0 auto;

    }

    .row {
        display: flex;
        justify-content: center;
    }



}
</style>