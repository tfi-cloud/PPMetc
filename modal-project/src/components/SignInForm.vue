<template>

    <div class="root">
        <div class="welcome">
            <title>Welcome to TFI Cloud PPM</title> <br>
            <a>Manage your project portfolio in an organized and efficient way.</a>
            <ul>
                <li>You will be able to design/optimize planning, follow-up, monitoring and budget management processes.</li>
                <li>You will be able to count on timely and accurate information on the status of your projects.</li>
                <li>You will be able to select the appropriate projects for the organization and carry out effective control for their timely conclusion.</li>
            </ul>
        </div>

        <div class="log-in">
            <form>
                <img class="logo-cloud" src="@/assets/TFI-Cloud.png"/>
                <label>User</label>
                <input type="text" required>
                <label>Password</label>
                <input type="password" required>
                <label class="link">Forgot email?</label>
                <router-link to="/dashboard"><button>Login</button></router-link>
            </form>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
    div .root{
        display:inline-flex;
        column-count: 2;
        position: relative;
        margin-top: 3%;
    }
    div .welcome{
        max-width: 570px;
        max-height: 460px;
        margin: 10px;
        background: #EFEFEF;
        text-align: left;
        padding: 40px;
        border-radius: 10px; 
    }
    title{
        color:#646464;
        display:inline-block;
        margin: 25px 0 15px;
        font-size: 0.9em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold; 
        margin-bottom: 60px;
    }
    ul{
        padding-top: 5%;
    }
    li{
        padding-bottom: 5%;
    }
    form{
        max-width: 400px;
        margin: 10px;
        margin-top: 2%;
        background: #EFEFEF;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    .logo-cloud{
        width: 55%;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    label{
        color:#646464;
        display:inline-block;
        margin: 25px 0 15px;
        font-size: 0.7em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input{
        display:block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border:none;
        border: 1px solid #ddd;
        color:#646464;
        background-color: white;
    }
    .link{
        color:#5CA4CE;
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
    }
    button{
        box-sizing: border-box;
        border:none;
        background-color:#FEAE00;
        color:black;
        font-weight: bold;
        width: 30%;
        padding: 10px 20px;
        margin-top: 30px;
        border-radius: 5px;
        display:block;
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;
        text-decoration: none !important;
    }
    a{
        text-decoration: none;
    }
</style>
    