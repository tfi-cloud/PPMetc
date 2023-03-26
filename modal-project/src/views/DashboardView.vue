<template>
  <div class="dashboardView">
    <welcome-bar></welcome-bar>
    <search-bar></search-bar>
    <nav-bar></nav-bar>

    <div class="dashboard">
      <div class="canvas">
        <div class="list-portfolio">

          <title>Portfolio 1</title>

          <div class="carousel">
            <vueper-slides class="no-shadow" :visible-slides="3" slide-multiple :bullets="false" :gap="3" :slide-ratio="1 / 4"  :dragging-distance="200" :breakpoints="{ 500: { visibleSlides: 2, slideMultiple: 2 } }">
              <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                :title="slide.title"
                :content="slide.content"
                :style="'background-color: white'">
              </vueper-slide>
            </vueper-slides>
          </div>

        </div>
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

    export default {
      name: 'DashboardView',
      components: {
        WelcomeBar,
        SearchBar,
        NavBar,
        VueperSlides,
        VueperSlide,
      },
      data(){
        return{
            
        }
    },
    
data: () => ({
  slides: [
    {
      title: 'Slide #1',
      content: 'Slide 1 content.'
    },
    {
      title: 'Slide #2',
      content: 'Slide 2 content.'
    },
    {
      title: 'Slide #3',
      content: 'Slide 3 content.'
    },
    {
      title: 'Slide #4',
      content: 'Slide 4 content.'
    },
    {
      title: 'Slide #5',
      content: 'Slide 5 content.'
    },
    {
      title: 'Slide #6',
      content: 'Slide 6 content.'
    },

  ],
  showDemo:true,
}),
    methods:{
        toggleShowDemo(){
            this.showDemo = false
        }
    }
    }
</script>
  
<style>
  .dashboard{
    display: grid;
    grid-template-columns: auto 30%;
    grid-auto-rows: minmax(117px, auto);
    width: 100%;
    height: 100%;
    position: relative;
    padding: 5px;
    grid-gap: 10px;
    background-color: white;
    flex-grow: 1;
  }
  .dashboard .canvas{
    width: 90%;
    margin: 10px;
    background: #EFEFEF;
    text-align: left;
    padding: 20px;
    border-radius: 10px; 
    grid-row: 1 / 5;
    margin-left: 5%;
  }
  .welcome{
    width: 70%;
    margin: 10px;
    margin-top: 2%;
    background: #EFEFEF;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
    grid-row: 1 / 5;
  }
  title{
    color:#646464;
    display:inline-block;
    margin: 25px 0 15px;
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold; 
    margin-bottom: 20px;
  }
  .cancel{
    border: 1px solid #B9B9B9;
    background: #EFEFEF;
  }
  .welcome button:hover{
    background-color:#ECA60E;
  }
  .welcome .cancel:hover{
    background-color:#D9D9D9; 
  }
  .vueperslides__arrow{
    color: #4C9CCB;
    stroke-width: 1px;
  }
  .vueperslides__arrow:hover{
    color: #ECA60E;
    stroke-width: 1px;
    background-color: transparent;
  }
</style>