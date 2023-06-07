<script>

import SingleFilm from './SingleFilm.vue';



export default {
    name: "AppListFilms",

    components: {
        SingleFilm
    }
}

</script>

<template>
    <div class="container">
        <h2>Film e Serie Tv</h2>
        <section>
            <SingleFilm />


        </section>
    </div>
</template>

<style lang="scss" scoped>
.container {
    background: orange;
    padding: 10px;

    h2 {
        text-align: center;
    }
}

section {
    padding: 20px;
    background: orange;
    width: 90%;
    margin: 0 auto;


    display: flex;
    flex-wrap: wrap;




}
</style>