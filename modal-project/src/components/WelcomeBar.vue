<template>
    <div class="welcome-nav">

        <div class="col-1">
            <a>Welcome </a>
            <a class="username">user</a>
        </div>
        <div class="col-2">
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
        grid-template-columns: 60% auto;
        max-width: 100%;
        position: relative;
        overflow: hidden;
        height: 40px;
        padding: 10px;
        grid-gap: 15px;
        background-color: #1571C1;
    }
    .welcome-nav > div {
        text-align: left;
    }

    a{
        color:white;
        letter-spacing: 1px;
        text-align: justify;
        font-size: 0.9em;
    }
    .col-1{
        padding: 10px 0;
        padding-left: 15px;
    }
    a.username{
        font-weight: bold;
        text-transform: capitalize;
    }
    button{
        margin-top: 0px;
        margin-left: 72%;
    }
    button:hover{
        background-color:#ECA60E;
    }
  </style>