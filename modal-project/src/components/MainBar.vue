<template>
  <div class="main-nav">
    <img class="logo" src="@/assets/TFI-Cloud.png"/>
    <button>Get your plan</button>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  div .main-nav{
    width: 100%;
    height: 60px;
    background-color: black;
    display: block;
    margin: 0%;
    margin-bottom: 40px;
  }
  button{
    border:none;
    background-color:#FEAE00;
    color:black;
    font-weight: bold;
    width: 10%;
    padding: 10px 20px;
    margin-top: 5px;
    border-radius: 5px;
    margin-right: 0;
    margin-left: 80%;
    cursor: pointer;
    display: inline-block;
  }
  img{
    max-width: 110px;
    max-height: auto; 
    display: inline-block;
  }

</style>