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
        <div class="message">
          <title>Welcome to TFI Cloud PPM</title>
          <p>Welcome to TFI Cloud PPM, 
          where you can handle the entire project portfolio of your organization,
          when you want to see a tutorial look here</p>
        </div>
        <div class="button">
          <button class="cancel" @click="toggleShowDemo">Dismiss</button>
          <button>See demo</button>
        </div>
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
    import getSubcollection from '../composables/getSubcollection'

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
    setup(){
        const { error, documentos, load } = getSubcollection('portfolios', 'projects')
        load()
        return{ error, documentos }
      },
    methods:{
        toggleShowDemo(){
            this.showDemo = false
        }
    }
  }
</script>
  
<style scoped>
.dashboardView {
  width: 100%;
}
.canvas{
    display: grid;
    grid-template-columns: 1fr 25%;
    max-width: 100%;
    height: 100%;
    position: relative;
    padding: 5px;
    grid-gap: 10px;
  }
  .canvas .list-carousel{
    max-width: 100%;
    box-sizing: border-box;
    margin: 5px;
    background: white;
    text-align: left;
    padding: 20px;
    border-radius: 10px; 
    margin-left: 1%;
    height: 570px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .canvas .welcome{
    width: 70%;
    height: 485px;
    margin: 10px;
    margin-top: 2%;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  .cancel{
    background-color: #d9d9d9;
    max-width: 60%;
  }
  .message{
    height: 430px;
  }
  .button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    width: 100%;
}
@media (max-width: 768px) {
  .button {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .cancel {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>