<script>



export default {
    name: "SingleFilm"
}

</script>

<template>
    <div class="container-films">
        <div>
            <img src="https://www.cinefacts.it/foto/h!fight-club-poster-locandina-cinefacts.jpg" alt="">
        </div>

        <div class="stats">
            <h3>Fight Club</h3>
            <h4>Voto: 4/5</h4>
            <h5>En</h5>
            <p>Descrizione: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus obcaecati
                assumenda,
                enim
                provident possimus non fugiat praesentium qui adipisci! Numquam dolor excepturi itaque voluptatem
                placeat
                impedit nostrum, facere eaque laboriosam.</p>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.container-films {
    width: calc(100% / 5);
    padding: 20px;


    h3,
    h4,
    p,
    h5 {
        text-align: center;
        margin: 10px 0;
    }

    img {
        width: 220px;
    }
}
</style>