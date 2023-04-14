<template>
    <div class="subbar">
        <nav class="sub-bar">
            <a class="active">Related</a>
            <a>Portfolios</a>
            <a>Resources</a>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .subbar{
        max-width: 100%;
        position: relative;
        overflow: hidden;
        height: 25px;
        padding: 6px;
        background-color: white;
        text-align: left;
        padding-left: 8px;
        border-bottom-style: solid !important;
        border-bottom-color: #ededed;
        padding-top: 1px;
        margin-bottom: 30px;
    }
    .sub-bar a {
        text-decoration: none;
        color: black; 
        padding: 12px;
        font-size: 0.9em;
        cursor: pointer;
    }
    .sub-bar a:hover {
        border-bottom-width: 2px;
        border-bottom-style: solid !important;
        border-bottom-color: #FEAE00;
        font-weight:bold;
    }
    .sub-bar a.router-link-exact-active {
        font-weight: bold;
        border-top: 2px;
        border-top-style: solid !important;
        border-top-color: #FEAE00;
        background-color: #efefef;
    }
    .active{
        border-bottom-width: 2px;
        border-bottom-style: solid !important;
        border-bottom-color: #FEAE00;
        font-weight:bold;
    }
</style>
    