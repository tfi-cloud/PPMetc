<template>
        <div class="directory">
            <div v-for="doc in documents" :key="doc.id">
                <router-link :to="{ name: 'portfolioDetails', params: { id: doc.id } }"> 
                    <ul>
                        <li> {{ doc.namePortfolio }} </li>
                    </ul>
                </router-link>
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

    .directory{
        width: 300px;
        margin-left: 4%;
        background: #EFEFEF;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
        height: 400px;
    } 
    li{
        cursor: pointer;
    }
    
</style>