<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppSearch from './components/AppSearch.vue';
import AppListFilms from './components/AppListFilms.vue';


export default {
  components: {
    AppHeader,
    AppSearch,
    AppListFilms
  }
}

</script>

<template>
  <AppHeader />

  <main>
    <AppSearch />

    <AppListFilms />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss'
</style>
