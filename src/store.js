import { reactive } from 'vue';


export const store = reactive({
    urlAPI: "https://api.themoviedb.org/3/search/movie?api_key=c110a42dfc262ac4ad61bdb4e70a4632&query=",
    listFilms: [],
    searchText: ""
})