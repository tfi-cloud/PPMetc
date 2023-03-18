<template>
    <div class="log-in">
        <form>
            <a>Start your free trial</a>
            <label>Name</label>
            <input type="text" required>
            <label>Lastname</label>
            <input type="text" required>
            <label>Position</label>
            <input type="text" required>
            <label>Phone number</label>
            <input type="text" required>
            <label class="column">Email</label>
            <input type="text" required>
            <label>Country</label>
            <input type="text" required>
            <label>Company</label>
            <input type="text" required>
            <label>Employees</label>
            <input type="text" required>
            <button>Sign Up</button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    form{
        max-width: 40%;
        margin-top: 2%;
        background: #EFEFEF;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
        column-count: 2;
        margin:0 auto;
	    width:100%;
    }
    a{
        font-size: 0.9em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
        display:block;
        margin-bottom: 5%;
    }
    label{
        color:#646464;
        display:inline-table;
        margin: 25px 0 15px;
        font-size: 0.7em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input{
        display:block;
        padding: 10px 0px 10px 0px;
        width: 90%;
        box-sizing: border-box;
        border:none;
        border: 1px solid #ddd;
        color:#646464;
        background-color: white;
    }
    .column{
        margin-top: 19%;
    }
    button{
        box-sizing: border-box;
        border:none;
        background-color:#FEAE00;
        color:black;
        font-weight: bold;
        width: 35%;
        padding: 10px 20px;
        margin-top: 30px;
        border-radius: 5px;
        display:block;
        margin-left: 55%;
        cursor: pointer;
    }
</style>
