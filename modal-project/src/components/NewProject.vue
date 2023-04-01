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

            <label>Description of the project *</label>
            <textarea required v-model="descriptionProject"> </textarea>

            <label>Vision *</label>
            <textarea required v-model="visionProject"> </textarea>

            <label>Status *</label>
            <select v-model="statusProject">
              <option disabled value="">Please select one</option>
              <option>Active</option>
              <option>Disabled</option>
            </select>

            <label>Planned Start Date *</label>
            <input type="date" required v-model="plannedStartDate">

            <label>Actual Start Date *</label>
            <input type="date" required v-model="actualStartDate">

          </div>
          <div>
          <label>Planned Finish Date *</label>
          <input type="date" required v-model="plannedFinishDate">

          <label>Actual Finish Date *</label>
          <input type="date" required v-model="actualFinishDate">

          <label>Planned Value *</label>
          <input type="number" required v-model="plannedValue">

          <label>Earned Value *</label>
          <input type="number" required v-model="earnedValue">

          <label>Actual Cost *</label>
          <input type="number" required v-model="actualCost">

          <label>Budget At Completion *</label>
          <input type="number" required v-model="budgetAtCompletion">

          <label>Percent Complete *</label>
          <input type="number" required v-model="percentComplete">

          <label>Hashtag *</label>
          <input type="text" required v-model="hashtag">
        </div>

          <button v-if="!isPending">Create Project</button>
          <button v-else class="isPending" disabled>Creating Project...</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
    import { ref } from 'vue';
    import useCollection from '../composables/useCollection';
    import { timestamp } from '../firebase/config'
    import { projectAuth } from '../firebase/config'

    export default {
    props: ['heading', 'text', 'theme'],
    setup(){

      //refs
      const nameProject = ref('')
      const descriptionProject = ref('')
      const visionProject = ref('')
      const statusProject = ref('')
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
      const user = projectAuth.currentUser.displayName
      const isPending = ref(false)



      //use addDoc
      const { error, addDoc } = useCollection('project')
      const handleSubmit = async () => {
        
          isPending.value = true
          await addDoc({
            nameProject: nameProject.value,
            descriptionProject: descriptionProject.value,
            visionProject: visionProject.value,
            statusProject: statusProject.value,
            plannedStartDate: plannedStartDate.value,
            actualStartDate: actualStartDate.value,
            plannedFinishDate: plannedFinishDate.value,
            actualFinishDate: actualFinishDate.value, 
            plannedValue: plannedValue.value,
            earnedValue: earnedValue.value,
            actualCost: actualCost.value,
            budgetAtCompletion: budgetAtCompletion.value,
            percentComplete: percentComplete.value,
            hashtag: hashtag.value,
            creationTime: timestamp(),
            createdBy: user,
            modifiedTime: timestamp(),
            modifiedBy: user,
          })
          isPending.value = false
          if(!error.value){
            console.log('project added')
          }
      }
      return{nameProject, descriptionProject, visionProject, statusProject, plannedStartDate,actualStartDate,plannedFinishDate,
        actualFinishDate,plannedValue,earnedValue,actualCost,budgetAtCompletion,percentComplete,hashtag,handleSubmit, isPending, error}
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
      overflow: auto;
      z-index: 1;
    }
    .modal{
      width: 800px;
      padding: 20px;
      margin: 100px auto;
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
    .window{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .window > div{
      width: 50%;
    }
    .window label{
      display: block;
      color:#646464;
      font-size: 0.7em;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
    }
    .window input{
      display: block;
      padding: 10px 5px 10px 5px;
      width: 90%;
      box-sizing: border-box;
      border: 1px solid #ddd;
      color:#646464;
      background-color: white;
      margin-bottom: 8% !important;
    }
    .window textarea{
      display: block;
      padding: 10px 5px 10px 5px;
      width: 90%;
      height: 90px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      color:#646464;
      background-color: white;
      margin-bottom: 6% !important;
    }
    .window select{
      display:block;
      padding: 10px 5px 10px 5px;
      width: 30%;
      box-sizing: border-box;
      border: 1px solid #ddd;
      color:#646464;
      background-color: white;
      margin-bottom: 6% !important;
    }
    .isPending{
      background-color: #CCCECB;
    }

  </style>