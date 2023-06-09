<script>
import { store } from './store.js';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppSearch from './components/AppSearch.vue';
import AppListFilms from './components/AppListFilms.vue';


export default {
  components: {
    AppHeader,
    AppSearch,
    AppListFilms
  },

  data() {
    return {
      store
    }
  },
  methods: {
    getFilms() {

      let movieList = store.urlAPI;

      if (store.searchText !== "") {
        movieList += `${store.searchText}`
        console.log(movieList);
      }
      axios.get(movieList)
        .then(res => {
          store.listFilms = res.data.results;

        })
        .catch(err => {
          console.log(err);
        })



      let serieList = store.APIurlSerie;

      if (store.searchText !== "") {
        serieList += `${store.searchText}`
        console.log(serieList);

        store.searchText = "";
      }
      axios.get(serieList)
        .then(res => {
          store.listSerie = res.data.results;

        })
        .catch(err => {
          console.log(err);
        })
    }
  },

  created() {
    this.getFilms();

  }
}



</script>

<template>
  <header>
    <AppHeader />
    <AppSearch @enter="getFilms" @search="getFilms" />
  </header>

  <main>


    <AppListFilms />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss';

header {
  display: flex;
  justify-content: space-between;

  align-items: center;

  padding: 10px;
  background-color: violet;
}
</style>
