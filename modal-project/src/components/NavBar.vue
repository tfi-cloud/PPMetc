<template>

    <div class="navbar">
        <nav class="nav-bar">
            <div>
                <router-link to="/dashboard">Dashboard</router-link>
            </div>

            <div>
                <router-link to="/portfolio">Portfolio</router-link>
            </div>

            <div>
                <router-link to="/projects">Project</router-link>
            </div>

            <div>
                <router-link to="/resources">Resouces</router-link>
            </div>

            <div>
                <router-link to="/costs">Costs</router-link>
            </div>

            <div>
                <router-link to="/reports">Reports</router-link>
            </div>

            <div>
                <router-link to="/tasks">Tasks</router-link>
            </div>
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
        padding-left: 13%;
        border-bottom-style: solid !important;
        border-bottom-color: #FEAE00;
    }
    .nav-bar a {
        text-decoration: none;
        color: black; 
        padding: 20px;
        font-size: 0.9em;
    }
    .nav-bar div:hover {
        font-weight: bold;
        border-top-width: 2px;
        border-top-style: solid !important;
        border-top-color: #FEAE00;
        background-color: #efefef;
    }
    .nav-bar > div{
        padding-bottom: 10px;
        padding-top: 5px;
        display: inline;
    }
</style>
    