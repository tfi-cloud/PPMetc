<template>
    <div>
        <div v-if="showModal">
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

          </div>
          <div>
            <label>Status *</label>
            <select v-model="statusProject" class="select">
              <option disabled value="">Please select one</option>
              <option>Active</option>
              <option>Disabled</option>
            </select>

            <label>Planned Start Date *</label>
            <input type="date" required v-model="plannedStartDate">

          <label>Planned Value *</label>
          <input type="number" required v-model="plannedValue">


          <label>Hashtag *</label>
          <input type="text" required v-model="hashtag">
        </div>

          <button v-if="!isPending">Create Project</button>
          <button v-else class="isPending" disabled>Creating Project...</button>
        </form>
      </div>
    </div>
        </div>
        <action-bar type="Add Project" icon="add" @click.capture="toggleModal"/>
    </div>
</template>

<script>
import ActionBar from '../components/ActionBar.vue'
import { ref } from 'vue';
import useCollection from '../composables/useCollection';
import { timestamp } from '../firebase/config'
import { projectAuth } from '../firebase/config'
import getCollection from '../composables/getCollection'
import useDocument from '../composables/useDocument'

export default {
    components: {
    ActionBar,
    },
    props: ['document'],
    setup(props){
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
      const linkedPortfolio = ref('')
      const user = projectAuth.currentUser.displayName
      const isPending = ref(false)
      const fieldValue = ref(false)

      //use document to add projects in
      const { error, AddSubCol } = useDocument('portfolios','projects', props.document.id)
      
      //get portfolios names
      const { documents } = getCollection('portfolios')

      const handleSubmit = async () => {
        
          isPending.value = true
          console.log(props.document.id)
            const newProject = {
            nameProject: nameProject.value,
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
          AddSubCol(newProject)

          isPending.value = false

          if(!error.value){
            console.log('project added')
          }
      }
      return{linkedPortfolio,nameProject, descriptionProject, visionProject, statusProject, plannedStartDate,actualStartDate,plannedFinishDate,
        actualFinishDate,plannedValue,earnedValue,actualCost,budgetAtCompletion,percentComplete,hashtag,handleSubmit, isPending, documents}

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
    },
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
    .window .select{
      display:block;
      padding: 10px 5px 10px 5px;
      width: 35%;
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