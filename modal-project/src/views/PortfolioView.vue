<template>
    <div class="portfolio-view">
        <welcome-bar></welcome-bar>
        <search-bar></search-bar>
        <nav-bar></nav-bar>
        <action-bar created="New Portfolio" deleted="Delete Portfolio" updated="Edit Portfolio"/>
        <portfolio></portfolio>
    </div>
  </template>
  
  <script>
    import WelcomeBar from '../components/WelcomeBar.vue'
    import SearchBar from '../components/SearchBar.vue'
    import NavBar from '../components/NavBar.vue'
    import ActionBar from '../components/ActionBar.vue'
    import Portfolio from '../components/Portfolio.vue'

  
    export default {
      name: 'PortfolioView',
      components: {
        WelcomeBar,
        SearchBar,
        NavBar,
        ActionBar,
        Portfolio,
      },
      data(){
      return{
        created:'New Portfolio',
        deleted:'Delete Portfolio',
        updated:'Save',
      } 
    }
    }
  </script>
  
<style>

</style>