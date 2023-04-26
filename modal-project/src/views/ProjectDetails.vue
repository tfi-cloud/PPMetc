<template>

  <div class="portfolio-view" >
        <welcome-bar></welcome-bar>
        <search-bar></search-bar>
        <div class="project-change"> 
          <nav-bar></nav-bar>
        </div>

        <div class="action-bar">

          <action-bar type="Add Project" icon="add" @click.capture="toggleModal"/>
          <div v-if="showModal">
            <new-project :heading="heading" :text="text" @close="toggleModal"/>
          </div>

          <action-bar type="Delete Project" icon="delete"/>
          <action-bar type="Save Project" icon="save" @click="handleUpdate(documentValue.nameProject, documentValue.descriptionProject, documentValue.visionProject,
           selectedStatus, documentValue.percentComplete, documentValue.actualCost,documentValue.actualFinishDate,documentValue.budgetAtCompletion, documentValue.hashtag,
           documentValue.ownerProject,documentValue.earnedValue ); toggleModalSave()"/>
          
          <div v-if="showSave">
            <update-portfolio @close="toggleModalSave"/>
          </div>

        </div>
  
        <div class="container">
          <project @click.native="$router.go()" class="directory"></project>
          <div class="canvas">
          <div class="details">

            <a class="title">{{ documentValue.nameProject }}</a>
  
            <label>Name Project</label>
            <input contenteditable @input="onNameInput" :class="{ edit: nameEdit }" v-model="documentValue.nameProject">
              
            <label>Description</label>
            <textarea contenteditable style="width: 76%; height: 60px; max-height: fit-content; margin-bottom: 20px; padding: 10px; border-color: #DDDDDD; border-radius: 4px; font-size: medium; font-family: Arial, Helvetica, sans-serif; color: #6B6464;" id="DescriptionField" @input="onDescriptionInput" :class="{ edit: descriptionEdit }" v-model="documentValue.descriptionProject"></textarea>

            <label>Vision</label>
            <textarea contenteditable style="width: 76%; height: 60px; max-height: fit-content; margin-bottom: 20px; padding: 10px; border-color: #DDDDDD; border-radius: 4px; font-size: medium; font-family: Arial, Helvetica, sans-serif; color: #6B6464;" id="DescriptionField" @input="onVisionInput" :class="{ edit: visionEdit }" v-model="documentValue.visionProject"></textarea>

            <label>Status</label>
            <select v-model="selectedStatus" style="width: 40%;text-transform: capitalize; margin-bottom: 20px; padding: 10px; border-color: #DDDDDD; border-radius: 4px; font-size: medium; color: #6B6464;" id="StatusField" @change="onStatusInput" :class="{ edit: statusEdit }" class="project-select">
              <option disabled value="option">{{ documentValue.statusProject }}</option>
              <option value="active">Active</option>
              <option value="disabled">Disabled</option>
            </select>

            <label>Percent Complete</label>
            <input contenteditable style="width: 40%;" @input="onPercent" :class="{ edit: percentEdit }" v-model="documentValue.percentComplete">

            <label>Actual Cost</label>
            <input contenteditable style="width: 40%;" @input="onActualCost" :class="{ edit: actualCostEdit }" v-model="documentValue.actualCost">

            <label>Actual Finish Date</label>
            <input contenteditable style="width: 40%;" @input="onActualFinishDate" :class="{ edit: actualFinishDateEdit }" v-model="documentValue.actualFinishDate">

            <label>Actual Start Date</label>
            <input contenteditable style="width: 40%;" @input="onActualStartDate" :class="{ edit: actualStartDateEdit}" v-model="documentValue.actualStartDate">

            <label>Budget At Completion</label>
            <input contenteditable style="width: 40%;" @input="onBudgetComplete" :class="{ edit: budgetCompleteEdit }" v-model="documentValue.budgetAtCompletion">

            <label>Hashtag</label>
            <input contenteditable style="width: 40%;" @input="onHashtag" :class="{ edit: hashtagEdit }" v-model="documentValue.hashtag">

            <label>owner project</label>
            <input contenteditable style="width: 40%;" @input="onOwner" :class="{ edit: ownerEdit }" v-model="documentValue.ownerProject">

            <label>earned value</label>
            <input contenteditable style="width: 40%;" @input="onEarnedValue" :class="{ edit: earnedValueEdit }" v-model="documentValue.earnedValue">

            <label>Planned start date</label>
            <input disabled style="width: 40%; background-color: #EFEFEF;" v-model="documentValue.plannedStartDate">

            <label>Planned finish date</label>
            <input disabled style="width: 40%; background-color: #EFEFEF;" v-model="documentValue.plannedFinishDate">
  
            <label>Created by</label>
            <input disabled style="width: 40%; background-color: #EFEFEF;" v-model="documentValue.createdBy">

            <label>Date of creation</label>
            <input disabled style="width: 79%; background-color: #EFEFEF;" :value="documentValue.creationTime.toDate()">

            <label>Modified by</label>
            <input disabled style="width: 40%; background-color: #EFEFEF;" v-model="documentValue.modifiedBy">

            <label>Date of modification</label>
            <input disabled style="width: 79%; background-color: #EFEFEF;" :value="documentValue.modifiedTime.toDate()">

            <label>Planned value</label>
            <input disabled style="width: 40%; background-color: #EFEFEF;" v-model="documentValue.plannedValue">

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
                <a>project values ()</a>
                <a>project ()</a>
                <a>KPI's</a>
                <a>Reports</a>
              </div>
            </div>
          </div>
      </div>
    </div>
</template>
  
<script>
  import { ref } from 'vue';
  import WelcomeBar from '../components/WelcomeBar.vue'
  import SearchBar from '../components/SearchBar.vue'
  import NavBar from '../components/NavBar.vue'
  import ActionBar from '../components/ActionBar.vue'
  import NewProject from '../components/NewProject.vue'
  import Project from '../components/Project.vue'
  import getSubdocument from '../composables/getSubdocument'
  import SubNav from '../components/SubNav.vue'
  import { projectAuth } from '../firebase/config'
  import { timestamp } from '../firebase/config'
  import updateSubdocument from '../composables/updateSubDocument'
  import UpdatePortfolio from '../components/UpdatePortfolio.vue'
  
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
        SubNav,
        UpdatePortfolio,
      },
      setup(props){
        const user = projectAuth.currentUser.displayName
        const { error, documento, load } = getSubdocument('portfolios','projects', props.id)
        const { upload } = updateSubdocument('portfolios','projects', props.id)
        load()
        
        const documentValue = ref(documento) 
        const handleUpdate = async (name,description,vision,status,percentComplete,actualCost,actualFinishDate,budgetAtCompletion,hashtag,owner,earnedValue) => {
        const updates = {
          nameProject: name,
          descriptionProject: description,
          statusProject: status,
          ownerProject: owner,
          visionProject: vision,
          percentComplete: percentComplete,
          actualCost: actualCost,
          actualFinishDate: actualFinishDate,
          budgetAtCompletion: budgetAtCompletion,
          hashtag: hashtag,
          earnedValue: earnedValue,
          modifiedBy: user,
          modifiedTime: timestamp()
        }
        await upload(updates) 
        location.reload();
      }
        return{ error, documento, documentValue, handleUpdate }
      },
      data(){
        return{
          heading: 'Create a new project',
          showModal: false,
          selectedStatus:'option',
          nameEdit: false,
          descriptionEdit: false,
          visionEdit: false,
          statusEdit: false,
          percentEdit: false,
          actualCostEdit: false,
          actualFinishDateEdit: false,
          actualStartDateEdit: false,
          budgetCompleteEdit: false,
          hashtagEdit: false,
          ownerEdit: false,
          earnedValueEdit: false,
          showSave:false,
        } 
      },
      methods: {
      toggleModal() {
        this.showModal = !this.showModal
      },
      toggleModalSave() {
        this.showSave = !this.showSave
      },
      onNameInput() {
        this.nameEdit = true;
      },
      onDescriptionInput() {
        this.descriptionEdit = true;
      },
      onVisionInput() {
        this.visionEdit = true;
      },
      onDescriptionInput() {
        this.descriptionEdit = true;
      },
      onStatusInput() {
        this.statusEdit = true;
      },
      onPercent() {
        this.percentEdit = true;
      },
      onActualCost() {
        this.actualCostEdit = true;
      },
      onActualFinishDate() {
        this.actualFinishDateEdit = true;
      },
      onActualStartDate() {
        this.actualStartDateEdit = true;
      },
      onBudgetComplete() {
        this.budgetCompleteEdit = true;
      },
      onHashtag() {
        this.hashtagEdit = true;
      },
      onOwner() {
        this.ownerEdit = true;
      },
      onEarnedValue() {
        this.earnedValueEdit = true;
      },
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
  .title{
    margin-bottom: 50px;
    color: #0071C1;
    font-size: 20px;
    text-transform: capitalize;
  }
  .details label{
    color:#646464;
    font-size: 0.9em;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-weight: bold;
    grid-column: 1 / 2;
  }
  .details input{
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
    font-size: medium;
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
  input.edit {
    background-color: #FEF4DF; /* background when edited */
  }
  select.edit {
    background-color: #FEF4DF; /* background when edited */
  }
  textarea.edit {
    background-color: #FEF4DF; /* background when edited */
  }
  .details input:focus{
    background-color: white;
    border-color: #1B96FF;
    border-width: 2px;
    outline: none; 
  }
  .details textarea:focus{
    background-color: white;
    border-color: #1B96FF !important;
    border-width: 2px;
    outline: none; 
  }
  .details .project-select:focus{
    background-color: white;
    border-color: #1B96FF !important;
    border-width: 2px !important;
    outline: none !important; 
  }
</style>
<style>
  .project-change .project-link {
    font-weight: bold;
    border-top: 2px;
    border-top-style: solid !important;
    border-top-color: #FEAE00;
    background-color: #efefef;
  }
</style>
