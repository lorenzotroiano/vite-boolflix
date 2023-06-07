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

      let films = store.urlAPI;

      if (store.searchText !== "") {
        films += `${store.searchText}`
        console.log(films);
      }
      axios.get(store.urlAPI)
        .then(res => {
          store.listFilms = res.data.results;

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
  <AppHeader />

  <main>
    <AppSearch @search="getFilms" />

    <AppListFilms />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss'
</style>
