<template>
    <div class="carousel">
    <title>Portfolio 1</title>
    <vueper-slides class="no-shadow" :visible-slides="3" slide-multiple :bullets="false" :gap="3" :slide-ratio="1 / 4"  :dragging-distance="200" :breakpoints="{ 500: { visibleSlides: 2, slideMultiple: 2 } }">
        <vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :style="'background-color: #F6F6F6' ">
        <template #content>

            <div id="myDIV">

                <div id="mymain">
                    <img class="logo-project"  src="@/assets/project.png">
                    <div>{{ percentage }}%</div>
                    <div>{{ owner }}</div>
                </div>

                <div id="mymain2">
                    <div>{{ slide.title }}</div>
                    <div>{{ slide.content }}</div>
                    <div>{{ date }}</div>
                    <div>{{ budget }}</div>
                </div>

                <div id="mymain3">
                    <button><span class="material-icons">track_changes</span>vision</button>
                    <button><span class="material-icons">calendar_month</span>plan</button>
                    <button><span class="material-icons">analytics</span>gannt</button>
                    <button><span class="material-icons">contacts</span>staff</button>
                </div>
            </div>
        </template>

        </vueper-slide>
    </vueper-slides>
    </div>
</template>

<script>
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'

    export default {
      components: {
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
  .carousel{
    margin-bottom: 5%;
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
  .logo-project{
    max-width: 40px;
    max-height: auto; 
    margin-top: 4px;
    cursor: pointer;
    margin-right: 5%;
    margin-left: 0%;
  }
  #myDIV {
	display: flex;
  	flex-direction: row;
    width: 300px;
  	height:100px;
    padding: 22px;
}
#mymain {
    width: 50px;
  	height: 100px;
  	margin-right:5px;
}
#mymain2 {
    width: 179px;
  	height: 100px;
    padding-top: 10px;
}
#mymain3 {
  	width: 50px;
    z-index: 1;
}
#myDIV button{
    cursor: pointer;
    margin-bottom: 5px;
    border: 1px solid #d0d0d0;
    background-color: #ffff;
    font-weight: normal;
    width: 100%;
    margin-top: 0px;
    margin-right: 0px;
    margin-left:0px;
    max-width: 100%;
    padding: 0px;
}

</style>