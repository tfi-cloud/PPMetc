<template>
        <div class="directory" v-if="documents">
            <div v-for="doc in documents" :key="doc.id" >
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
        const { error, documents } = getCollection('portfolios')
        return{ error, documents }
    },
}

</script>

<style scoped>

    .directory{
        width: 310px;
        margin-left: 1%;
        background: #EFEFEF;
        text-align: left;
        padding: 30px;
        border-radius: 10px;
        height: 449px;
        overflow: auto;
    } 
    .directory a{
        text-decoration: none;
        cursor: pointer;
        color:black;
    }
    .directory li{
        padding: 10px;
    }
    .directory ul:hover{
        background-color: #D9D9D9;
        font-weight: bold;
    }
    .directory  a.router-link-exact-active{
        font-weight: bold;
        color: #0071C1;
    }
</style>