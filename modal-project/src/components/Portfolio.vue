<template>
    <div class="portfolio">
        <div v-if="error">{{ error }}</div>
        <div class="directory" v-if="documents">

            <div v-for="doc in documents" :key="doc.id">
                <ul>
                    <li> {{ doc.namePortfolio }} </li>
                    <ul>
                        <li>Black tea</li>
                    </ul>
                </ul>

            </div>
        </div>

        <div class="canvas">

        </div>

    </div>
</template>

<script>
import getCollection from '../composables/getCollection'

export default {
    setup(){
        const { error, documents } = getCollection('portfolio')

        return{ error, documents }
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
        height: 400px;

    } 
    .portfolio .canvas{
        width: 99%;
        background: #EFEFEF;
        text-align: left;
        border-radius: 10px; 
        margin-left: 0%;
        height: 480px;
    }

</style>