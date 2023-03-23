<template>
  <div class="main-nav">
    <img class="logo" src="@/assets/TFI-Cloud.png"/>
    <div class="buttons">
      <button>Get your plan</button>
      <router-link to="/sign-up"><button>Free Trial</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style escoped>

  div .main-nav{
    max-width: 100%;
    height: 60px;
    background-color: black;
    display: flexbox;
    margin-bottom: 40px;
    column-count: 2;
    border-bottom-style: solid !important;
    border-bottom-color: #FEAE00;
  }
  button {
    border:none;
    background-color:#FEAE00;
    color:black;
    font-weight: bold;
    max-width: 60%;
    padding: 10px 25px;
    margin-top: 10px;
    border-radius: 5px;
    margin-right: 3%;
    display: inline-flexbox;
    cursor: pointer;
  }
  .buttons{
    margin-left: 50%;
  }
  .logo{
    max-width: 110px;
    max-height: auto; 
    margin-top: 4px;
    cursor: pointer;
    margin-right: 70%;
  }

</style>