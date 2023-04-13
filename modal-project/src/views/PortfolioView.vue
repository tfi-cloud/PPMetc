<template>
  <div class="portfolio-view">
      <welcome-bar></welcome-bar>
      <search-bar></search-bar>
      <nav-bar></nav-bar>

      <div class="action-bar">

        <div v-if="showModal">
          <new-portfolio :heading="heading" :text="text" @close="toggleModal"/>
        </div>

        <action-bar type="Add Portfolio" icon="add" @click.capture="toggleModal"/>
        <action-bar type="Delete Portfolio" icon="delete"/>
        <action-bar type="Save Portfolio" icon="save"/>
      </div>
      <portfolio class="list-port"></portfolio>
  </div>
</template>

<script>
import WelcomeBar from '../components/WelcomeBar.vue'
import SearchBar from '../components/SearchBar.vue'
import NavBar from '../components/NavBar.vue'
import ActionBar from '../components/ActionBar.vue'
import NewPortfolio from '../components/NewPortfolio.vue'
import Portfolio from '../components/Portfolio.vue'

export default {
  name: 'PortfolioView',
    components: {
      WelcomeBar,
      SearchBar,
      NavBar,
      ActionBar,
      NewPortfolio,
      Portfolio,
    },
    data(){
      return{
        heading: 'Create a new Portfolio',
        showModal: false,
      } 
    },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
  .action-bar{
      max-width: 100%;
      width: 97%;
      border-radius: 5px;
      margin:  0px auto;
      position: relative;
      overflow: hidden;
      height: 40px;
      background-color: white !important;
      text-align: left;
      padding-left: 15px;
      display: grid;
      grid-template-columns: 12% 12% 12%;
  }
  .list-port{
    margin-top: 10px 
    !important;
    width: 260px;
  }
</style>