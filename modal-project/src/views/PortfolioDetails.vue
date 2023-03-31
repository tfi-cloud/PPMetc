<template>
    <div class="portfolioDetails">
      <portfolio-view></portfolio-view>
      <div class="container">
        <portfolio></portfolio>
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

        </div>
      </div>
    </div>

</template>

<script>
    import PortfolioView from './PortfolioView.vue'
    import Portfolio from '../components/Portfolio.vue'
    import getDocument from '../composables/getDocument'

export default {
  props:['id'],
  name: 'PortfolioDetails',
    components: {
      PortfolioView,
      Portfolio,
    },
    setup(props){
      const { error, document } = getDocument('portfolio', props.id )

      return{ error, document }
    }
}
</script>

<style scoped>
    .container{
        display: grid;
        grid-template-columns: 30% auto;
        max-width: 100%;
        height: 100%;
        position: relative;
        padding: 10px;
        grid-gap: 0px;
        background-color: white;
    }
    .details{
        width: 90%;
        background: #EFEFEF;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
        height: 400px;
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