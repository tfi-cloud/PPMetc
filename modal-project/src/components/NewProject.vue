<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
    <div class="header">
      <title>{{ heading }}</title>
      <span class="material-icons" @click.capture="closeModal">clear</span>
    </div>
      <form class="window" @submit.prevent="handleSubmit">
        <div>
          <label>Name of Project *</label>
          <input type="text" required v-model="nameProject">

          <label>Portfolio *</label>
          <select v-model="folder" class="select" >
            <option disabled value="">Please select one</option>
            <option v-for="doc in documents" :key="doc.id">{{ doc.namePortfolio }}</option>
          </select>

          <label>Description *</label>
          <textarea required v-model="descriptionProject"> </textarea>

          <label>Vision *</label>
          <textarea required v-model="visionProject"> </textarea>
        </div>

        <div>
          <label>Status *</label>
          <select v-model="statusProject" class="select">
            <option disabled value="">Please select one</option>
            <option>Active</option>
            <option>Disabled</option>
          </select>

          <label>Owner *</label>
          <input type="text" required v-model="ownerProject">

          <label>Planned Start Date *</label>
          <input type="date" required v-model="plannedStartDate">

          <label>Planned Value *</label>
          <input type="number" required v-model="plannedValue">

          <label>Hashtag *</label>
          <input type="text" required v-model="hashtag">
      </div>

        <button v-if="!isPending">Create Project</button>
        <button v-else disabled class="isPending">Creating Project...</button>
        <div class="error">{{ error }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import getCollection from '../composables/getCollection'
import { timestamp } from '../firebase/config'
import { projectAuth } from '../firebase/config'
import addSubcollection from '../composables/addSubcollection'

export default {
  props: ['heading', 'text', 'id'],
  setup(){

    const { error, documents } = getCollection('portfolios')

    //refs
    const nameProject = ref('')
    const descriptionProject = ref('')
    const visionProject = ref('')
    const statusProject = ref('')
    const folder = ref('')
    const plannedStartDate = ref('')
    const actualStartDate = ref('')
    const plannedFinishDate = ref('')
    const actualFinishDate = ref('')
    const plannedValue = ref('')
    const earnedValue = ref('')
    const actualCost = ref('')
    const budgetAtCompletion = ref('')
    const percentComplete = ref('')
    const hashtag = ref('')
    const linkedPortfolio = ref('')
    const user = projectAuth.currentUser.displayName
    const isPending = ref(false)

    const handleSubmit = async () => {

      isPending.value = true
      const newProject = {
      nameProject: nameProject.value,
      folder: folder.value,
      descriptionProject: descriptionProject.value,
      visionProject: visionProject.value,
      statusProject: statusProject.value,
      plannedStartDate: plannedStartDate.value,
      actualStartDate: '',
      plannedFinishDate: plannedFinishDate.value,
      actualFinishDate: '', 
      plannedValue: plannedValue.value,
      earnedValue: '',
      actualCost: '',
      budgetAtCompletion: '',
      percentComplete: '0%',
      hashtag: hashtag.value,
      creationTime: timestamp(),
      createdBy: user,
      modifiedTime: timestamp(),
      modifiedBy: user,
      }
      //use document to add projects in
      const { AddSubCol } = addSubcollection('portfolios','projects', folder.value)

      AddSubCol(newProject)
        nameProject.value = '',
        folder.value = '',
        descriptionProject.value = '',
        visionProject.value = '',
        statusProject.value = '',
        plannedStartDate.value = '',
        plannedFinishDate.value = '',
        plannedValue.value = '',
        hashtag.value = '',
        isPending.value = false

      if(!error.value){
          console.log('project added')
        }
    }
    return{error, documents,folder,linkedPortfolio,nameProject, descriptionProject, visionProject, statusProject, plannedStartDate,actualStartDate,plannedFinishDate,
        actualFinishDate,plannedValue,earnedValue,actualCost,budgetAtCompletion,percentComplete,hashtag,handleSubmit, isPending,}
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  .backdrop {
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(63, 63, 63, 0.5);
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: auto;
  }
  .modal{
    width: 800px;
    padding: 20px;
    margin: 120px auto;
    background: white;
    border-radius: 5px;
    padding-left: 60px;
  }
  .modal title{
    margin-bottom: 50px;
  }
  .header{
    display: grid;
    grid-template-columns: 96% auto;
  }
  .header span{
    cursor: pointer;
  }
  .form{
    text-align: left;
  }
  .window label{
      color:#646464;
      display:inline-block;
      font-size: 0.7em;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
  }
  .window input{
      display:block;
      padding: 10px 5px 10px 5px;
      width: 80%;
      box-sizing: border-box;
      border: 1px solid #ddd;
      color:#646464;
      background-color: white;
      margin-bottom: 6% !important;
  }
  .window textarea{
    display:block;
      padding: 10px 5px 10px 5px;
      width: 80%;
      height: 100px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      color:#646464;
      background-color: white;
      margin-bottom: 6% !important;
  }
  .window select{
    display:block;
    padding: 10px 5px 10px 5px;
    width: 50%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    color:#646464;
    background-color: white;
    margin-bottom: 6% !important;
  }
  .error{
      margin: 0px auto;
      text-align: center;
      color:#CE0F0F;
      display: inline-block;
      width: 100%;
  }
  button .isPending{
    background-color: #CCCECB;
  }
  .window > div{
      width: 50%;
  }
  .window{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>