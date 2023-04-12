<template>
  <div class="dashboardView">
    <welcome-bar></welcome-bar>
    <search-bar></search-bar>
    <nav-bar></nav-bar>
    <div class="canvas">

      <div class="list-carousel">
        <carousel></carousel>
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

  </div>
</template>
  
<script>
    import WelcomeBar from '../components/WelcomeBar.vue'
    import SearchBar from '../components/SearchBar.vue'
    import NavBar from '../components/NavBar.vue'
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'
    import Carousel from '../components/Carousel.vue'

    export default {
      name: 'DashboardView',
      components: {
        WelcomeBar,
        SearchBar,
        NavBar,
        VueperSlides,
        VueperSlide,
        Carousel,
      },
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
.canvas{
    display: grid;
    grid-template-columns: auto 25%;
    grid-auto-rows: minmax(117px, auto);
    max-width: 100%;
    height: 100%;
    position: relative;
    padding: 5px;
    grid-gap: 10px;
    overflow: auto;
  }
  .canvas .list-carousel{
    max-width: 100%;
    box-sizing: border-box;
    margin: 10px;
    background: white;
    text-align: left;
    padding: 20px;
    border-radius: 10px; 
    grid-row: 1 / 5;
    margin-left: 5%;
  }
  .canvas .welcome{
    width: 70%;
    height: 400px;
    margin: 10px;
    margin-top: 2%;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
    grid-row: 1 / 5;
  }
</style>