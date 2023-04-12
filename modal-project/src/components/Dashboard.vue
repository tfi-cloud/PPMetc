<template>

  <div class="dashboard">

    <div class="canvas">

    </div>

    <div class="welcome" v-if="showDemo">
        <title>Welcome to TFI Cloud PPM</title>
        <p>Welcome to TFI Cloud PPM, 
            where you can handle the entire project portfolio of your organization,
            when you want to see a tutorial look here</p><br><br><br><br><br><br><br><br><br><br><br>
        <button class="cancel" @click="toggleShowDemo">Dismiss</button>
        <button>See demo</button>
    </div>
  </div>

</template>

<script>
export default {

    data(){
        return{
            showDemo:true,
        }
    },
    methods:{
        toggleShowDemo(){
            this.showDemo = false
        }
    }
}
</script>

<style scoped>
    .dashboard{
        display: grid;
        grid-template-columns: auto 30%;
        grid-auto-rows: minmax(117px, auto);
        width: 100%;
        height: 100%;
        position: relative;
        padding: 10px;
        grid-gap: 10px;
    }
  .canvas{
        width: 85%;
        margin: 10px;
        text-align: left;
        padding: 40px;
        border-radius: 10px; 
        grid-row: 1 / 5;
        margin-left: 5%;
    }
    .welcome{
        width: 70%;
        margin: 10px;
        margin-top: 2%;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
        grid-row: 1 / 5;
    }
    title{
        color:#646464;
        display:inline-block;
        margin: 25px 0 15px;
        font-size: 0.9em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold; 
        margin-bottom: 20px;
    }
    button.cancel{
        border: 1px solid #B9B9B9;
        background: #EFEFEF;
    }

    button:hover{
        background-color:#ECA60E;
    }
    .cancel:hover{
        background-color:#D9D9D9; 
    }
</style>
  
    