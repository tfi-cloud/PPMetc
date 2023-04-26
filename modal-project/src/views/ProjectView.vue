<template>
  <div class="project-view">
      <welcome-bar></welcome-bar>
      <search-bar></search-bar>
      <nav-bar></nav-bar>

      <div class="action-bar">

        <action-bar type="Add Project" icon="add" @click.capture="toggleModal"/>
        <div v-if="showModal">
          <new-project :heading="heading" :text="text" @close="toggleModal"/>
        </div>
        <action-bar type="Delete Project" icon="delete"/>
        <action-bar type="Save Project" icon="save"/>
      </div>
      <project class="list-port"/>
  </div>
</template>

<script>
import WelcomeBar from '../components/WelcomeBar.vue'
import SearchBar from '../components/SearchBar.vue'
import NavBar from '../components/NavBar.vue'
import ActionBar from '../components/ActionBar.vue'
import NewProject from '../components/NewProject.vue'
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
  .action-bar{
    max-width: 100%;
    position: relative;
    overflow: hidden;
    height: 40px;
    background-color: #efefef;
    text-align: left;
    padding-left: 15px;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 12% 12% 12%;
  }
  .list-port{
    margin-top: 10px;
  }
</style>