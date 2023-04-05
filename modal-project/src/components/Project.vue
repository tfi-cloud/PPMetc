<template>
    <div class="directory" v-if="documents">
        <div v-for="docu in documents" :key="docu.id" >
            <ul>
                <li> {{ docu.namePortfolio }} </li>
                <div v-for="docs in documentos" :key="docs.id" class="subcol">
                    <router-link :to="{ name: 'projectDetails', params: { id: docs.id } }"> 
                        <ul class="main">
                            <li> {{ docs.nameProject }} </li>
                        </ul>
                    </router-link>
                </div>
            </ul>
        </div>
    </div> 
</template>

<script>
import getSubcollection from '../composables/getSubcollection'
import getCollection from '../composables/getCollection'

export default {

setup(){
    const { error, documentos } = getSubcollection('portfolios', 'projects','portfolios.id')
    const { documents } = getCollection('portfolios')
    return{ error, documentos, documents }
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
    height: 450px;
    overflow: auto;
} 
.directory ul ul {
    cursor: pointer;
    color:black;
}
.directory li{
    padding: 10px;
}
.directory a{
    text-decoration: none;
}
.directory ul.main:hover{
    background-color: #D9D9D9;
    font-weight: bold;
    cursor: pointer;
}
.directory  a.router-link-exact-active{
    font-weight: bold;
    color: #0071C1 !important;
}

</style>