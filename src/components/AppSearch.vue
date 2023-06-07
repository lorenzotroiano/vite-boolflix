<script>

import { store } from '../store.js';

export default {
    name: "AppSearch",

    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <section>
        <span>Cerca:</span>
        <input type="text" placeholder="Cerca film/serie Tv" v-model.trim="store.searchText">
        <button @click="$emit('search')">Cerca</button>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 20px;
    background: orange;
    text-align: center;

    button {
        background-color: red;
        width: 80px;
        border: solid 1px black;
        border-radius: 7px;
        padding: 5px;

        margin-left: 10px;
    }
}
</style>