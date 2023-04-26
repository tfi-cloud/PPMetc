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
    margin: 0;
    box-sizing: border-box;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
  }

  body{
    overflow: hidden;
    background-image: url("@/assets/background.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
  }

</style>
