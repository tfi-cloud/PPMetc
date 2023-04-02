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
        <action-bar type="Save Portfolio" icon="save"/>
      </div>

      <div class="container">
        <portfolio @click.native="$router.go()"></portfolio>
        <div class="details">

          <div class="col">
            <label>Name Portfolio</label>
            <span disabled> {{ document.namePortfolio }}</span>

            <label>Description</label>
            <span disabled> {{ document.descriptionPortfolio }}</span>

            <label>Status</label>
            <span disabled> {{ document.selectedStatus }}</span>

            <label>Owner</label>
            <span disabled> {{ document.ownerPortfolio }}</span>
          </div>

          <div class="col">
            <label>Created by</label>
            <span disabled> {{ document.createdBy }}</span>

            <label>Date of creation</label>
            <span disabled>{{ document.creationTime.toDate() }}</span>

            <label>Modified by</label>
            <span disabled> {{ document.modifiedBy }}</span>

            <label>date of modification</label>
            <span disabled> {{ document.modifiedTime.toDate() }}</span>
          </div>
          
          <add-project :document="document"/>
          
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
    import AddProject from '../components/AddProject.vue'

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
      AddProject
    },
    setup(props){
      const { error, document } = getDocument('portfolios', props.id )
      return{ error, document }
    },
    data(){
      return{
        heading: 'Create a new Portfolio',
        showModal: false,
        
      } 
    },
    methods: {
    toggleModal() {
      this.showModal = !this.showModal
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
        padding: 10px;
        grid-gap: 0px;
        background-color: white;
    }
    .details{
        width: 92%;
        background: #EFEFEF;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
        height: 430px;
    }
    .col{
      display: inline-block;
      width: 50%;
      margin-top: 3%;
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
      height: fit-content;
      border: 1px solid #ddd;
      color:#646464;
      background-color: white;
      margin-bottom: 8%;
    }
</style>