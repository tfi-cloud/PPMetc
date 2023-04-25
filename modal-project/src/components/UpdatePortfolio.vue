<template>
    <div class="modalSave">
        <div class="update">
            <span class="material-icons" style="font-size: 30px;">check_circle</span> 
            <title>Your changes have been saved.</title>
        </div>
        <span class="material-icons" @click.capture="closeModal">clear</span>
    </div>
</template>

<script>
export default {
    data() {
    return {
      visible: true
    }
  },
    methods: {
      closeModal() {
        this.$emit('close')
      }
    }
}
</script>

<style scoped>
    .modalSave{
        display: flex;
        align-items: center;
        top: 0;
        left: 36%;
        position: fixed;
        z-index: 1;
        width: 400px;
        height: 30px;
        padding: 14px;
        margin: 230px auto;
        background: #2E844A;
        border-radius: 5px; 
    }
    .update {
        display: flex;
        align-items: center;
        flex: 1;
    }
    .modalSave title{
        color: white;
        font-size: 1.6ch;
        text-transform: initial;
        text-align: center;
        margin: auto 0px;
        margin-left: 20px;
    }
    .modalSave .update{
        flex: 1;
    }
    .modalSave span{
        color: white;
        cursor: pointer;
    }
</style>