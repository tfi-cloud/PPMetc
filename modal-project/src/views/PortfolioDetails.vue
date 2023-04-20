<template>

  <div class="portfolio-view" >
      <welcome-bar></welcome-bar>
      <search-bar></search-bar>
      <nav-bar></nav-bar>

      <div class="action-bar">

        <div v-if="showModal">
          <new-portfolio :heading="heading" :text="text" theme="sale" @close="toggleModal"/>
        </div>
        <action-bar type="Add Portfolio" icon="add" @click.capture="toggleModal"/>

        <action-bar type="Delete Portfolio" icon="delete"/>

        <action-bar type="Save Portfolio" icon="save" @click.capture="toggleModalSave"/>
        <div v-if="showSave">
          <update-portfolio  @close="toggleModalSave"/>
        </div>
      </div>

      <div class="container">
        <portfolio @click.native="$router.go()"></portfolio>
        <div class="canvas">
          <div class="details">

            <a class="title">{{ document.namePortfolio }}</a>

            <label>Name Portfolio</label>
            <span contenteditable id="NameField" @input="onNameInput" :class="{ edit: nameEdit }"> {{ document.namePortfolio }}</span>

            <label>Description</label>
            <span contenteditable style="height: 90px; max-height: fit-content;" id="DescriptionField" @input="onDescriptionInput" :class="{ edit: descriptionEdit }"> {{ document.descriptionPortfolio }}</span>

            <label>Status</label>
            <select v-model="statusProject" style="width: 40%; margin-bottom: 20px; padding: 10px; border-color: #DDDDDD; border-radius: 4px; font-size: medium; color: #6B6464;" id="StatusField" @change="onStatusInput" :class="{ edit: statusEdit }" class="portfolio-select">
              <option disabled value="option">{{ document.selectedStatus }}</option>
              <option value="active">Active</option>
              <option value="disabled">Disabled</option>
            </select>

            <label>Owner</label>
            <span contenteditable style="width: 40%;" id="OwnerField" @input="onOwnerInput" :class="{ edit: ownerEdit }"> {{ document.ownerPortfolio }}</span>

            <label>Created by</label>
            <span disabled style="width: 40%; background-color: #EFEFEF;"> {{ document.createdBy }}</span>

            <label>Date of creation</label>
            <span disabled  style="background-color: #EFEFEF;">{{ document.creationTime.toDate() }}</span>

            <label>Modified by</label>
            <span disabled style="width: 40%; background-color: #EFEFEF;"> {{ document.modifiedBy }}</span>

            <label>Date of modification</label>
            <span disabled style="background-color: #EFEFEF;"> {{ document.modifiedTime.toDate() }}</span>
          </div>
        
          <div class="header">
            <div>
              <a class="sub-title">portfolio objectives</a>
              <hr>
            </div>

            <div v-if="showModalGoal">
              <new-goal :heading="header" :text="text" :document="document" @close="toggleModalGoal"/>
            </div>
            <action-bar type="Add Objective" class="add-objective" icon="add_circle" @click.capture="toggleModalGoal" />
          </div>
          
          <div class="list-obj"  v-for="doc in goals" :key="doc.id" >
              <ul>
                <li> {{doc.nameGoal}} </li>
              </ul>
          </div>

        </div>

        <div class="related">
          <div><sub-nav></sub-nav></div>
          <div class="resume">
            <div class="col">
              <span class="material-icons" style="color: #21ADFF;">crisis_alert</span> 
              <span class="material-icons" style="color: #ECA60E;">description</span> 
              <span class="material-icons" style="color: #FF42A1;">pie_chart</span> 
              <span class="material-icons" style="color: #60D937;">insert_chart</span> 
            </div>

            <div class="col">
              <a>portfolio objectives ({{ goals.length }})</a>
              <a>portfolio projects ({{ projects.length }})</a>
              <a>KPI's</a>
              <a>Reports</a>
            </div>
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
    import Portfolio from '../components/Portfolio.vue'
    import getDocument from '../composables/getDocument'
    import NewGoal from '../components/NewGoal.vue'
    import getGoals from '../composables/getGoals'
    import SubNav from '../components/SubNav.vue'
    import getProjects from '../composables/getProjects'
    import UpdatePortfolio from '../components/UpdatePortfolio.vue'

export default {
  props:['id'],
  name: 'PortfolioDetails',
    components: {
      WelcomeBar,
      SearchBar,
      NavBar,
      ActionBar,
      NewPortfolio,
      Portfolio,
      NewGoal,
      SubNav,
      UpdatePortfolio,
    },
    setup(props){
      const { error, document } = getDocument('portfolios', props.id )
      const { projects } = getProjects('projects', props.id)
      const { goals } = getGoals('goals', props.id )
      return{ error, document, goals, projects }
    },
    data(){
      return{
        heading: 'Create a new Portfolio',
        header: 'Create a new Goal',
        showModal: false,
        showSave:false,
        showModalProject: false,
        showModalGoal:false,
        nameEdit: false,
        descriptionEdit: false,
        ownerEdit:false,
        statusEdit:false,
        statusProject:'option',
      } 
    },

    methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalSave() {
      this.showSave = !this.showSave
    },
    toggleModalProject() {
      this.showModalProject = !this.showModalProject
    },
    toggleModalGoal() {
      this.showModalGoal = !this.showModalGoal
    },
    onNameInput() {
      this.nameEdit = true;
    },
    onDescriptionInput() {
      this.descriptionEdit = true;
    },
    onOwnerInput() {
      this.ownerEdit = true;
    },
    onStatusInput() {
      this.statusEdit = true;
    }

  }
}

</script>

<style scoped>
  .container{
    display: grid;
    grid-template-columns: 16% 60% 30%;
    max-width: 100%;
    height: 100%;
    position: relative;
    padding: 10px;
    grid-gap: 3px;
  }
  .canvas{
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
    height: 440px;
    overflow: auto;
  }
  .details{
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 0px;
  }
  .details .title{
    margin-bottom: 50px;
    color: #0071C1;
    font-size: 20px;
  }
  .details label{
    color:#646464;
    font-size: 0.9em;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-weight: bold;
    grid-column: 1 / 2;
  }
  .details span{
    padding: 10px 5px 10px 10px;
    width: 80%;
    box-sizing: border-box;
    border:none;
    height: fit-content;
    border: 1px solid #ddd;
    color:#646464;
    background-color: white;
    margin-bottom: 3%;
    grid-column: 2 / 3;
    border-radius: 5px;
  }
  .header{
    display: grid;
    grid-template-columns: 68% 20%;
    margin-top: 40px;
  }
  .header a{
    text-transform: capitalize;
    font-weight: bold;
  }
  .header hr{
    margin-left: 0%;
    margin-right: 50%;
    width: 28%;
    border: none;
    height: 3px;
    background-color: #ECA60E;
  }
  .add-objective{
    width: 142px;
    border: 1px solid #D9D9D9!important;
    border-radius: 4px;
    box-shadow: 2px 2px 2px rgba(184, 184, 184, 0.3);
  }
  .list-obj{
    margin-top: 40px;
    text-transform: capitalize;
  }
  .related{
    width: 300px;
    margin-left: 10px;
    background: white;
    text-align: left;
    padding: 20px;
    border-radius: 10px;
    height: 260px;
    overflow: auto;
  }
  .resume{
    display: grid;
    grid-template-columns: 16% 80%;
  }
  .related span{
    display: block;
    padding: 10px;
    cursor: pointer;
  }
  .related a{
    display: block;
    padding: 10px;
    margin-top: 5px;
    text-transform: capitalize;
    cursor: pointer;
  }
  span.edit {
    background-color: #FEF4DF; /* background when edited */
  }
  select.edit {
    background-color: #FEF4DF; /* background when edited */
  }
  .details span:focus{
    background-color: white;
    border-color: #1B96FF;
    border-width: 2px;
    outline: none; 
  }
  .details .portfolio-select:focus{
    background-color: white;
    border-color: #1B96FF !important;
    border-width: 2px !important;
    outline: none !important; 
  }

</style>