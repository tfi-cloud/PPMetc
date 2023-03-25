<template>
  <div class="project-view">
      <welcome-bar></welcome-bar>
      <search-bar></search-bar>
      <nav-bar></nav-bar>
      <action-bar created="New Project" deleted="Delete Project" updated="Edit Project"/>
      <portfolio/>
  </div>
</template>

<script>
  import WelcomeBar from '../components/WelcomeBar.vue'
  import SearchBar from '../components/SearchBar.vue'
  import NavBar from '../components/NavBar.vue'
  import ActionBar from '../components/ActionBar.vue'
  import Portfolio from '../components/Portfolio.vue'


  export default {

    name: 'ProjectView',
    components: {
      WelcomeBar,
      SearchBar,
      NavBar,
      ActionBar,
      Portfolio,
    }
  }
</script>

<style>

</style>