<template>
    <div class="search">
        <div class="log">
            <img class="logo" src="@/assets/TFI-Cloud.png"/> 
        </div>
        <div class="searcher">
            <form id="search">
            <input class='query' name="query" v-model="searchQuery" placeholder="Search..">
            </form>
        </div>
        <div class="icons">
            <span class="material-icons">grade</span>
            <span class="material-icons">add_circle</span>
            <span class="material-icons">help</span>
            <span class="material-icons">notifications</span>
            <span class="material-icons">settings</span>
            <span class="material-icons">account_circle</span>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    div.search{
        position: absolute;
        margin:4% auto auto auto;
        height: 55px;
        column-count: 3;
        width: 100%;
        background-color: #EFEFEF;
        padding-top: 30px;
    }
    div.log{
        width: 20%;
        margin-left: 7%;
        margin-right: 0%;
    }
    .logo{
        max-width: 110px;
        max-height: auto; 
        cursor: pointer;
    }
    div.searcher{
        display: block;
        width: 60%;
        margin-right: 30%;
    }
    .query{
        margin-left: 5%;
        width: 80%;
    }
    div.icons{
        color: #FEAE00;
        margin-left: 30%;   
    }
    span{
        margin-left: 5%;
    }
    input{
        color: rgba(0,0,0,.70);
        border: 1px solid rgba(0,0,0,.12);
        transition: .15s all ease-in-out;
        background: white;
        padding-right: 50%;
        padding-top: 14px;
        padding-bottom: 5px;
        padding-left: 5px;
    }
    input:focus{
        outline: none;
        transform: scale(1.05);
    }
    input + label {
        font-size: 10px;
        transform: translateY(-24px) translateX(-12px);
    }    
    input::-webkit-input-placeholder {
        font-size: 12px;
        color: rgba(0,0,0,.50);
        font-weight: 100;
    }
</style>
    