<template>
    <div class="backdrop" @click.self="closeModal">
      <div class="modal">
        <div class="header">
          <title>{{ heading }}</title>
          <span class="material-icons" @click.capture="closeModal">clear</span>
        </div>
        <form class="window" @submit.prevent="handleSubmit">
          <label>Objetive *</label>
          <input type="text" required v-model="nameGoal">
    
          <label>Description *</label>
          <textarea required v-model="descriptionGoal"> </textarea>
    
          <label>Owner *</label>
          <input type="text" required v-model="ownerGoal">
    
          <button v-if="!isPending">Create Objective</button>
          <button v-else disabled class="isPending">Creating Objective...</button>
          <div class="error">{{ error }}</div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, toRefs } from 'vue';
  import addSubcollectionByID from '../composables/addSubcollectionByID'
  
  export default {
    props: ['heading', 'text', 'document'],
    setup(props){
  
      //refs
      const nameGoal = ref('')
      const descriptionGoal = ref('')
      const ownerGoal = ref('')
      const isPending = ref(false)
  
      //use document to add goal in
      const { error , AddSubColByID } = addSubcollectionByID('portfolios','goals', props.document.id)
    
      const handleSubmit = async () => {
        isPending.value = true
        const newGoal = {
          nameGoal: nameGoal.value,
          descriptionGoal: descriptionGoal.value,
          ownerGoal: ownerGoal.value,
        }
  
        AddSubColByID(newGoal)
        nameGoal.value = ''
        descriptionGoal.value = ''
        ownerGoal.value = ''
        isPending.value = false
    
        if(!error.value){
          console.log('goal added')
        }
      }
  
      return { error, nameGoal, descriptionGoal, ownerGoal, handleSubmit, isPending }
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
      width: 600px;
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
        font-size: 0.9em;
        text-transform: capitalize;
        letter-spacing: 1px;
        font-weight: bold;
    }
    .window input{
        display:block;
        padding: 10px 5px 10px 5px;
        width: 70%;
        box-sizing: border-box;
        border: 1px solid #ddd;
        color:#646464;
        background-color: white;
        margin-bottom: 6% !important;
    }
    .window textarea{
      display:block;
        padding: 10px 5px 10px 5px;
        width: 70%;
        height: 100px;
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

  </style>