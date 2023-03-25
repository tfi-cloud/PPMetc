<template>
    <div class="welcome-nav">
        <div class="col-1">
            <img class="logo" src="@/assets/TFI-Cloud.png"/> 
        </div>
        <div class="col-2">
            <a>Welcome </a>
            <a class="username">user</a>
        </div>
        <div class="col-3">
            <button>Get your plan</button>
        </div>
        
    </div>

  </template>
  
  <script>
  export default {
  }
  </script>

  
  <style scoped>
    .welcome-nav{
        display: grid;
        grid-template-columns: 10% 60% auto;
        width: 100%;
        position: relative;
        overflow: hidden;
        height: 60px;
        padding: 10px;
        grid-gap: 15px;
        background-color: #1571C1;
    }
    .welcome-nav > div {
        text-align: left;
    }
    .logo{
        margin-left: 10%;
    }
    a{
        color:white;
        letter-spacing: 1px;
        text-align: justify;
        font-size: 0.9em;
    }
    .col-2{
        padding: 20px 0;
    }
    a.username{
        font-weight: bold;
        text-transform: capitalize;
    }
    button{
        margin-left: 60%;
    }
    button:hover{
        background-color:#ECA60E;
    }
  </style>