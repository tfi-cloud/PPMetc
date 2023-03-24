<template>
    <div class="dashboard">
        <welcome-bar></welcome-bar>
        <search-bar></search-bar>
    </div>
  </template>
  
  <script>
    import WelcomeBar from '../components/WelcomeBar.vue'
    import SearchBar from '../components/SearchBar.vue'
    import Dashboard from '../components/Dashboard.vue'
  
    export default {
      name: 'DashboardView',
      components: {
        WelcomeBar,
        SearchBar,
        Dashboard,
      }
    }
  </script>
  
<style>
</style>