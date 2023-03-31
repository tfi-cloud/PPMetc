<template>
    <div class="backdrop" @click.self="closeModal">
      <div class="modal">
      <div class="header">
        <title>{{ heading }}</title>
        <span class="material-icons" @click.capture="closeModal">clear</span>
      </div>
        <form class="window" @submit.prevent="handleSubmit">
          <label>Name of Portfolio *</label>
          <input type="text" required v-model="namePortfolio">

          <label>Status *</label>
          <select v-model="selectedStatus">
            <option disabled value="">Please select one</option>
            <option>Active</option>
            <option>Disabled</option>
          </select>

          <label>Description *</label>
          <textarea required v-model="descriptionPortfolio"> </textarea>

          <label>Owner *</label>
          <input type="text" required v-model="ownerPortfolio">

          <button v-if="!isPending">Create Portfolio</button>
          <button v-else disabled>Creating Portfolio...</button>
          <div class="error">{{ error }}</div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import useCollection from '../composables/useCollection';
  import { timestamp } from '../firebase/config'
  import getUser from '@/composables/getUser';
  import { projectAuth } from '../firebase/config'


  export default {
    props: ['heading', 'text', 'theme'],
    setup(){

      //refs
      const namePortfolio = ref('')
      const selectedStatus = ref('')
      const descriptionPortfolio = ref('')
      const ownerPortfolio = ref('')
      const isPending = ref(false)
      const user = projectAuth.currentUser.displayName
      
      //use addDoc
      const { error, addDoc } = useCollection('portfolio')
      const handleSubmit = async () => {
        isPending.value = true
        await addDoc({
          namePortfolio: namePortfolio.value,
          selectedStatus: selectedStatus.value,
          descriptionPortfolio: descriptionPortfolio.value,
          ownerPortfolio: ownerPortfolio.value,
          projects: [],
          creationTime: timestamp(),
          createdBy: user,
          modifiedTime: timestamp(),
          modifiedBy: user,
        })
        isPending.value = false
      }
      return{namePortfolio, selectedStatus, descriptionPortfolio, ownerPortfolio, handleSubmit, isPending, error}
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
        font-size: 0.7em;
        text-transform: uppercase;
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
    .error{
        margin: 0px auto;
        text-align: center;
        color:#CE0F0F;
        display: inline-block;
        width: 100%;
    }
  </style>