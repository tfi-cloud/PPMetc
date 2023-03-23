<template>
    <div class="welcome-nav">
        <div class="welcome">
            <img class="logo" src="@/assets/TFI-Cloud.png"/> 
        </div>
        <div class="user">
            <a>Welcome </a>
            <a class="username">user</a>
        </div>
        <div class="button">
            <button>Get your plan</button>
        </div>
        
    </div>

  </template>
  
  <script>
  export default {
  }
  </script>

  
  <style scoped>
 div .welcome-nav{
        width: 100%;
        height: 70px;
        background-color: #1571C1;
        display: flex;
        align-items: flex-start;
        column-count: 3;
        position: absolute;
    }
    button {
        border:none;
        background-color:#FEAE00;
        color:black;
        font-weight: bold;
        width: 90%;
        max-width: 100%;
        padding: 5px 25px;
        box-sizing: border-box;
        border-radius: 5px;
        margin-left: 5%;
        cursor: pointer;
    }
    .button{
        margin-top: 4px;
        margin-left: 70%;
    }
    .logo{
        max-width: 110px;
        max-height: auto; 
        margin-top: 7px;
        cursor: pointer;
        margin-left: 30%;
        display: block;
    }
    .user{
        margin-top: 25px;
        cursor: pointer;
        margin-left: 4%;
    }
    a{
        color:white;
        letter-spacing: 1px;
        text-align: center;
        margin: 0 auto;
    }
    a.username{
        font-weight: bold;
        font-size: 0.9em;
        text-transform: capitalize;
    }

  </style>