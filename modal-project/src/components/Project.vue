<template>
    <div class="directory" v-if="documentos">
        <div v-for="doc in documentos" :key="doc.id" >
            <ul>
                <li> {{ doc.namePortfolio }} </li>
                <div v-for="subdoc in doc.projects" :key="subdoc.id" class="subcol">
                    <router-link :to="{ name: 'projectDetails', params: { id: subdoc.id } }"> 
                        <ul class="main">
                            <li> {{ subdoc.nameProject }} </li>
                        </ul>
                    </router-link>
                </div>
            </ul>
        </div>
    </div> 
</template>

<script>
import getSubcollection from '../composables/getSubcollection'

export default {

    setup(){
        const { error, documentos, load } = getSubcollection('portfolios', 'projects')
        load()
        return{ error, documentos }
    },
}

</script>

<style scoped>

    .directory{
        margin-left: 1%;
        background: white;
        text-align: left;
        border-radius: 10px;
        height: 520px;
        overflow: auto;
    } 
    .directory ul ul {
        cursor: pointer;
        width: 120px;
    }
    .directory li{
        padding: 10px;
        text-transform: capitalize;
    }
    .directory a{
        text-decoration: none;
    }
    .directory ul.main:hover{
        background-color: #D9D9D9;
        font-weight: bold;
        cursor: pointer;
    }
    .directory ul a.router-link-exact-active{
        font-weight: bold;
        color: #0071C1 !important;
    }
    a{
        color:black;
    }
</style>