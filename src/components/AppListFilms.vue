<script>
import { store } from '../store.js';
import SingleFilm from './SingleFilm.vue';
import SingleSerie from './SingleSerie.vue';



export default {
    name: "AppListFilms",

    components: {
        SingleFilm,
        SingleSerie
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <div class="container">
        <h2>Film e Serie Tv</h2>
        <section>
            <SingleFilm v-for="film in store.listFilms" :details="film" />


            <SingleSerie v-for="serie in store.listSerie" :details="serie" />


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