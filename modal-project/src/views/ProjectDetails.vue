<template>

    <div class="portfolio-view" >
        <welcome-bar></welcome-bar>
        <search-bar></search-bar>
        <nav-bar></nav-bar>
  
        <div class="container">
          <project @click.native="$router.go()"></project>
          <div class="details">
  
            <div class="col">
                <label>Name Project</label>
                <span disabled> {{ document.nameProject }}</span>
              
                <label>Description</label>
                <span disabled> {{document.descriptionProject }}</span>

                <label>Status</label>
                <span disabled> {{ document.statusProject }}</span>

                <label>Planned start date</label>
                <span disabled> {{ document.plannedStartDate }}</span>

                <label>Planned finish date</label>
                <span disabled> {{ document.plannedFinishDate }}</span>

                <label>Percent Complete</label>
                <span disabled> {{ document.percentComplete }}</span>

            </div>
  
            <div class="col">
                <label>Created by</label>
                <span disabled> {{ document.createdBy }}</span>

                <label>Date of creation</label>
                <span disabled>{{ document.creationTime.toDate() }}</span>

                <label>Modified by</label>
                <span disabled> {{ document.modifiedBy }}</span>

                <label>Date of modification</label>
                <span disabled> {{ document.modifiedTime.toDate() }}</span>

                <label>Planned value</label>
                <span disabled> {{ document.plannedValue }}</span>

                <label>Vision of the project</label>
                <span disabled> {{ document.visionProject }}</span>
          </div>
            
          </div>
          
        </div>
    </div>
  
  </template>
  
  <script>
      import WelcomeBar from '../components/WelcomeBar.vue'
      import SearchBar from '../components/SearchBar.vue'
      import NavBar from '../components/NavBar.vue'
      import ActionBar from '../components/ActionBar.vue'
      import NewPortfolio from '../components/NewPortfolio.vue'
      import Project from '../components/Project.vue'
      import getSubdocument from '../composables/getSubdocument'
  
  export default {
    props:['id'],
    name: 'ProjectDetails',
      components: {
        WelcomeBar,
        SearchBar,
        NavBar,
        ActionBar,
        NewPortfolio,
        Project,
      },
      setup(props){
        const { error, document } = getSubdocument('projects', props.id)
        return{ error, document }
      },
      data(){
        return{
          heading: 'Create a new Portfolio',
          showModal: false,
          showModalProject: false,
        } 
      },
  
      methods: {
      toggleModal() {
        this.showModal = !this.showModal
      },
      toggleModalProject() {
        this.showModalProject = !this.showModalProject
      }
    }
  }
  
  
  </script>
  
  <style scoped>
      .container{
          display: grid;
          grid-template-columns: 26% auto;
          max-width: 100%;
          height: 100%;
          position: relative;
          padding: 20px;
          grid-gap: 0px;
          background-color: white;
      }
      .details{
          width: 92%;
          background: #EFEFEF;
          text-align: left;
          padding: 40px;
          border-radius: 10px;
          height: 450px;
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
        text-transform: uppercase;
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
  </style>