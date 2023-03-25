<template>
    <div class="portfolio">

        <div class="directory">

        </div>

        <div class="canvas">

        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .portfolio{
        display: grid;
        grid-template-columns: 30% auto;
        grid-auto-rows: minmax(117px, auto);
        width: 100%;
        height: 100%;
        position: relative;
        padding: 10px;
        grid-gap: 10px;
        background-color: white;
    }  
    .directory{
        width: 70%;
        margin-left: 12%;
        background: #EFEFEF;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
        grid-row: 1 / 5;
    } 
    .portfolio .canvas{
        width: 95%;
        background: #EFEFEF;
        text-align: left;
        border-radius: 10px; 
        grid-row: 1 / 5;
        margin-left: 0%;
    }

</style>