<template>
    <div class="backdrop" @click.self="closeModal">
      <div class="modal">
      <div class="header">
        <title>{{ heading }}</title>
        <span class="material-icons" @click.capture="closeModal">clear</span>
      </div>
        <form class="window">
          <label>Name of Portfolio *</label>
          <input type="text" required v-model="name">

          <label>Status *</label>
          <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>Active</option>
            <option>Disabled</option>
          </select>

          <label>Description *</label>
          <textarea required v-model="description"> </textarea>

          <label>Owner *</label>
          <input type="text" required v-model="owner">

          <button>Create Portfolio</button>
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
      z-index: 1;
      overflow: auto;
    }
    .modal{
      width: 700px;
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
        width: 60%;
        box-sizing: border-box;
        border: 1px solid #ddd;
        color:#646464;
        background-color: white;
        margin-bottom: 6% !important;
    }
    .window textarea{
      display:block;
        padding: 10px 5px 10px 5px;
        width: 60%;
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
  </style>