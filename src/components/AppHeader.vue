<script>



export default {
    name: "AppHeader"
}

</script>

<template>
    <section>
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Netflix_logo_%282%29.svg/1200px-Netflix_logo_%282%29.svg.png"
                alt="">
        </div>
        <h1>BoolFlix</h1>


    </section>
</template>

<style lang="scss" scoped>
section {
    display: flex;
    align-items: center;

    // padding: 10px;
    // background-color: violet;


    img {
        width: 150px;
        margin-right: 30px;
    }
}
</style>