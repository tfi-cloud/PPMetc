<template>
    <div class="wrapper">
        <div class="col-1">
            <img class="logo" src="@/assets/TFI-Cloud.png"/> 
        </div>
        <div class="col-2">
            <form id="search">
                <span class="material-icons">search</span>
                <input name="query" v-model="searchQuery" placeholder="Search...">
            </form>
        </div>
        <div class="col-3">
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
    .wrapper{
        display: grid;
        grid-template-columns: 10% 60% auto;
        width: 100%;
        position: relative;
        overflow: hidden;
        height: 50px;
        padding: 10px;
        grid-gap: 30px;
        background-color: white;
    }
    .wrapper > div {
        text-align: center;
        font-size: 30px; 
    }
    .logo{
        margin-left: 10%;
    }
    .col-2{
        margin-left: 20%;
        padding: 10px 0;
    }
    .col-2 input{
        color: rgba(0,0,0,.70);
        border: 1px solid rgba(0,0,0,.12);
        transition: .15s all ease-in-out;
        background: white;
        padding-right: 40%;
        padding-top: 14px;
        padding-bottom: 5px;
        padding-left: 15px;
        border-radius: 5px;
        width: 7%;
        margin-left: 20px;
    }
    .col-2 input:focus{
        outline: none;
        transform: scale(1.05);
    }
    .col-3{
        color: #FEAE00;
        align-content: end;
        margin-left: 40%;
        padding: 10px 0;
        cursor: pointer;
    }
    .col-3 span{
        margin-right: 4%;
    }
    
</style>
    