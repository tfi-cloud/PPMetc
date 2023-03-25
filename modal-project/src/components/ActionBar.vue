<template>
    <div class="action-bar">
            <button> <span class="material-icons">add</span> {{created}} </button>
            <button> <span class="material-icons">delete</span> {{deleted}} </button>
            <button> <span class="material-icons">save</span> {{updated}} </button>
    </div>
</template>

<script scoped>
export default {
    data(){
      return{
        created:'',
        deleted:'',
        updated:'',
      }  
    }
}
</script>

<style>
    .action-bar{
        width: 100%;
        position: relative;
        overflow: hidden;
        height: 30px;
        padding: 10px;
        background-color: #efefef;
        text-align: left;
        padding-left: 160px;
        display: grid;
        grid-template-columns: 12% 12% auto;
    }
    .action-bar button{
        background-color: #efefef;
        max-width: fit-content;  
        padding: 10px;
        font-weight: normal;
        margin:0;
    }
    .action-bar.material-icons {
        font-size: 10px;
    }
    .action-bar span{
        margin-right: 5px;
        vertical-align: middle;
    }

    .action-bar button:hover{
        background-color: #D9D9D9;  
        padding: 10px;
        margin:0ch;
        font-weight: normal;
    }

</style>