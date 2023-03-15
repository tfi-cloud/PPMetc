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

<style escoped>

  div .main-nav{
    width: 100%;
    height: 60px;
    background-color: black;
    display: block;
    margin-bottom: 40px;
    column-count: 2;
    border-bottom-style: solid !important;
    border-bottom-color: #FEAE00;
  }
  button{
    border:none;
    background-color:#FEAE00;
    color:black;
    font-weight: bold;
    width: 20%;
    padding: 10px 20px;
    margin-top: 10px;
    border-radius: 5px;
    margin-left: 70%;
    cursor: pointer;
    display: inline-block;
  }
  .logo{
    width: 110px;
    max-height: auto; 
    margin-right: 70%;
    margin-top: 4px;
    cursor: pointer;
  }

</style>