<template>
  <router-view/>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  html, body{
    height: 100%;
    max-width: 1920px;
    margin: 0 auto;
  }

  body{
    overflow: auto;
    margin: 0;
    box-sizing: border-box;
    background-image: url("@/assets/background.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
