<template>

    <div class="navbar">
        <nav class="nav-bar">
                
                <router-link to="/dashboard">Dashboard</router-link>

                <router-link to="/portfolio">Portfolio</router-link>

                <router-link to="/projects">Project</router-link>

                <router-link to="/resources">Resouces</router-link>

                <router-link to="/costs">Costs</router-link>

                <router-link to="/reports">Reports</router-link>

                <router-link to="/tasks">Tasks</router-link>

        </nav>
    </div>

</template>

<script>
export default {
    
}
</script>

<style scoped>
    .navbar{
        width: 100%;
        position: relative;
        overflow: hidden;
        height: 20px;
        padding: 10px;
        background-color: white;
        text-align: left;
        padding-left: 11%;
        border-bottom-style: solid !important;
        border-bottom-color: #FEAE00;
        margin-top: 5px;
    }
    .nav-bar a {
        text-decoration: none;
        color: black; 
        padding: 10px;
        font-size: 0.9em;
        padding-right: 10px;
    }
    .nav-bar a:hover {
        font-weight: bold;
        border-top-width: 2px;
        border-top-style: solid !important;
        border-top-color: #FEAE00;
        background-color: #efefef;
        padding:10px;
    }

    .nav-bar a.router-link-exact-active {
        font-weight: bold;
        border-top: 2px;
        border-top-style: solid !important;
        border-top-color: #FEAE00;
        background-color: #efefef;
        padding:10px;
    }
</style>
    