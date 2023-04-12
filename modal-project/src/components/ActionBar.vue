<template>
    <div class="action-button">
        <button> <span class="material-icons">{{ icon }}</span> {{ type }} </button>
    </div>
</template>

<script scoped>
export default {
    props: ['icon', 'type']
}
</script>

<style scoped>
    .action-button button{
        background-color: white;
        max-width: fit-content;  
        padding: 10px;
        font-weight: normal;
        margin:0;
    }
    .action-button.material-icons {
        font-size: 10px;
    }
    .action-button span{
        margin-right: 5px;
        vertical-align: middle;
    }
    .action-button button:hover{
        background-color: #efefef;  
        margin:0ch !important;
        font-weight: bold;
        border-radius: 0%;
    }
</style>