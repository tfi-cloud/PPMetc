<template>
    <div class="project">

        <div class="directory">
        </div>

        <div class="canvas">

        </div>

    </div>
</template>

<script>
import getCollection from '../composables/getCollection'

export default {
    setup(){

    }

}
</script>

<style scoped>
    .project{
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
    .project .canvas{
        width: 99%;
        background: #EFEFEF;
        text-align: left;
        border-radius: 10px; 
        margin-left: 0%;
        height: 480px;
    }

</style>