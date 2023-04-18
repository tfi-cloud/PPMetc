<template>
  <div class="carousel">
    <div v-for="doc in documentos" :key="doc.id"> 
      <title>{{ doc.namePortfolio }}</title>
      <vueper-slides class="no-shadow" :visible-slides="2" slide-multiple :bullets="false" :gap="3" :slide-ratio="1 / 4"  :dragging-distance="200" :breakpoints="{ 500: { visibleSlides: 2, slideMultiple: 2 } }">
        <vueper-slide
          v-for="subdoc in doc.projects" 
          :key="subdoc.id"
          :style="'background-color: #F6F6F6; width: 400px'">
        <template #content>
            <div id="myDIV">

              <div id="mymain">
                <img class="logo-project"  :src="doc.coverUrl">
                <div class="percent">{{ subdoc.percentComplete }}</div>
                <div class="owner">{{ subdoc.ownerProject  }}</div>
              </div>

              <div id="mymain2">
                <div class="nameProject">{{ subdoc.nameProject }}</div>
                <div class="description">{{ subdoc.descriptionProject }}</div>
                <div class="date">{{ subdoc.plannedStartDate }}</div>
                <div class="budget"><a>Budget: </a>{{ subdoc.plannedValue }}</div>
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
  </div>
</template>

<script>
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'
    import getSubcollection from '../composables/getSubcollection'

    export default {
      components: {
        VueperSlides,
        VueperSlide,
      },
      setup(){
        const { error, documentos, load } = getSubcollection('portfolios', 'projects')
        load()
        return{ error, documentos }
      },
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
    width: 400px;
  	height:100px;
    padding: 22px;
  }
  #mymain {
    width: 80px;
  	height: 100px;
  	margin-right: 5px;
  }
  #mymain2 {
    width: 230px;
  	height: 100px;
    padding-top: 10px;
    justify-content: center;
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
  .nameProject{
    text-transform: capitalize;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .description{
    font-size: medium;
    margin-bottom: 15px;
  }
  .date{
    color: #a1a0a0;
    font-style: italic;
    margin-bottom: 15px;
  }
  .percent{
    margin-left: 10px;
    margin-bottom: 93px;
    font-weight: bold;
    margin-top: 10px;
  }
  .budget a{
    color: #a1a0a0;
  }
</style>