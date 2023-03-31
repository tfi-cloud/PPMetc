<template>
    <div class="portfolio">

        <div class="directory" v-for="portfolio in documents" :key="portfolio.id">
            <div>{{ portfolio.namePortfolio }}</div>
        </div>

        <div class="canvas">

        </div>

    </div>
</template>

<script>
import getCollection from '@/composables/getCollection'

export default {
setup(){
    const {error, documents} = getCollection('portfolio')
    return{error, documents}
}

}
</script>

<style scoped>
    .portfolio{
        display: grid;
        grid-template-columns: 30% auto;
        grid-auto-rows: minmax(117px, auto);
        max-width: 100%;
        height: 100%;
        position: relative;
        padding: 10px;
        grid-gap: 0px;
        background-color: white;
    }  
    .directory{
        width: 70%;
        margin-left: 4%;
        background: #EFEFEF;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
        grid-row: 1 / 5;
    } 
    .portfolio .canvas{
        width: 99%;
        background: #EFEFEF;
        text-align: left;
        border-radius: 10px; 
        grid-row: 1 / 5;
        margin-left: 0%;
    }

</style>