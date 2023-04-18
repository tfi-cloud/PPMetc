<template>

    <div class="portfolio-view" >
        <welcome-bar></welcome-bar>
        <search-bar></search-bar>
        <nav-bar></nav-bar>

        <div class="action-bar">

          <div v-if="showModal">
            <new-project :heading="heading" :text="text" @close="toggleModal"/>
          </div>

          <action-bar type="Add Project" icon="add" @click.capture="toggleModal"/>
          <action-bar type="Delete Project" icon="delete"/>
          <action-bar type="Save Project" icon="save"/>
        </div>
  
        <div class="container">
          <project @click.native="$router.go()" class="directory"></project>
          <div class="details" v-if="documento">
  
              <div class="col" >
                <label>Name Project</label>
                <span disabled> {{ documento.nameProject }}</span>
              
                <label>Description</label>
                <span disabled style="height: fit-content;"> {{documento.descriptionProject }}</span>

                <label>Status</label>
                <span disabled> {{ documento.statusProject }}</span>

                <label>Planned start date</label>
                <span disabled> {{ documento.plannedStartDate }}</span>

                <label>Planned finish date</label>
                <span disabled> {{ documento.plannedFinishDate }}</span>

                <label>Percent Complete</label>
                <span disabled> {{ documento.percentComplete }}</span>

              </div>
  
              <div class="col">
                <label>Created by</label>
                <span disabled> {{ documento.createdBy }}</span>

                <label>Date of creation</label>
                <span disabled>{{ documento.creationTime.toDate() }}</span>

                <label>Modified by</label>
                <span disabled> {{ documento.modifiedBy }}</span>

                <label>Date of modification</label>
                <span disabled> {{ documento.modifiedTime.toDate() }}</span>

                <label>Planned value</label>
                <span disabled> {{ documento.plannedValue }}</span>

                <label>Vision of the project</label>
                <span disabled style="height: fit-content;"> {{ documento.visionProject }}</span>
              </div>
          </div>
          <div v-if="error">{{ error }}</div>
      </div>
    </div>
  </template>
  
  <script>
      import WelcomeBar from '../components/WelcomeBar.vue'
      import SearchBar from '../components/SearchBar.vue'
      import NavBar from '../components/NavBar.vue'
      import ActionBar from '../components/ActionBar.vue'
      import NewProject from '../components/NewProject.vue'
      import Project from '../components/Project.vue'
      import getSubdocument from '../composables/getSubdocument'
  
  export default {
    props:['heading','text','id'],
    name: 'ProjectDetails',
      components: {
        WelcomeBar,
        SearchBar,
        NavBar,
        NewProject,
        ActionBar,
        Project,
      },
      setup(props){
        const { error, documento, load } = getSubdocument('portfolios','projects', props.id)
        load()
        return{ error, documento }
      },
      data(){
        return{
          heading: 'Create a new project',
          showModal: false,
        } 
      },
  
      methods: {
      toggleModal() {
        this.showModal = !this.showModal
      },
    }
  }
  
  
  </script>
  
  <style scoped>
    .container{
      display: grid;
      grid-template-columns: 18% auto;
      max-width: 100%;
      height: 100%;
      position: relative;
      padding: 8px;
      grid-gap: 0px;
      margin-left: 6px;
    }
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
    .details{
      width: 93%;
      background: white;
      text-align: left;
      padding: 40px;
      border-radius: 10px;
      height: 440px;
      overflow: auto;
    }
    .col{
      display: inline-block;
      width: 50%;
    }
    .details label{
      color:#646464;
      display:block;
      font-size: 0.7em;
      text-transform: capitalize;
      letter-spacing: 1px;
      font-weight: bold;
    }
    .details span{
      display:block;
      padding: 10px 5px 10px 5px;
      width: 90%;
      box-sizing: border-box;
      border:none;
      height: 33px;
      border: 1px solid #ddd;
      color:#646464;
      background-color: white;
      margin-bottom: 8%;
    }
    .directory{
      width: 260px !important;
    }
  </style>