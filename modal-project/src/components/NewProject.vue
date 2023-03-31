<template>
    <div class="backdrop" @click.self="closeModal">
      <div class="modal">
      <div class="header">
        <title>{{ heading }}</title>
        <span class="material-icons" @click.capture="closeModal">clear</span>
      </div>
        <form class="window">
          
          <div>
            <label>Name of Project *</label>
            <input type="text" required v-model="name">

            <label>Upload a cover image for the project *</label>
            <input type="file" required>

            <label>Description of the project*</label>
            <textarea required v-model="descrip_project"> </textarea>

            <label>Vision *</label>
            <textarea required v-model="vision"> </textarea>

            <label>Status *</label>
            <select v-model="selected">
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
        
          <button>Create Project</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['heading', 'text', 'theme'],
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

  </style>