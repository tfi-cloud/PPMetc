<template>
  <div class="project-view">
      <welcome-bar></welcome-bar>
      <search-bar></search-bar>
      <nav-bar></nav-bar>
      <project class="list-port"/>
  </div>
</template>

<script>
  import WelcomeBar from '../components/WelcomeBar.vue'
  import SearchBar from '../components/SearchBar.vue'
  import NavBar from '../components/NavBar.vue'
  import ActionBar from '../components/ActionBar.vue'
  import NewProject from '@/components/NewProject.vue'
  import Project from '../components/Project.vue'


  export default {

    name: 'ProjectView',
    components: {
      WelcomeBar,
      SearchBar,
      NavBar,
      ActionBar,
      NewProject,
      Project,
    },
    data(){
        return{
          heading: 'Create a new Project',
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
  .list-port{
    margin-top: 20px;
    
  }
</style>