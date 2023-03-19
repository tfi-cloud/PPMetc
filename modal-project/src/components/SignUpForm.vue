<template>
    <div class="log-in">
        <form>
            <div class="header">Start your free trial</div>
            <div class="body">
                <v-col>
                    <v-row>
                        <label>Full name</label>
                        <input type="text" required>

                        <label>Position</label>
                        <input type="text" required>

                        <label>Email</label>
                        <input type="text" required>

                        <label>Country</label>
                        <input type="text" required>
                    </v-row>
                </v-col>
                <v-col>
                    <v-row>
                        <label>a</label>
                        <input type="text" required>

                        <label>b</label>
                        <input type="text" required>

                        <label>c</label>
                        <input type="text" required>

                        <label>d</label>
                        <input type="text" required>
                    </v-row>
                </v-col>

                    <button>Sign Up</button>

            </div>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    form{
        max-width: 70%;
        margin-top: 2%;
        background: #EFEFEF;
        text-align: left;
        padding: 40px;
        padding-left: 80px;
        border-radius: 10px;
        margin:0 auto;
	    width:100%;
    }
    .header{
        font-size: 1.0em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
        display:block;
        padding-bottom: 5%;
    }
    label{
        color:#646464;
        display:inline-block;
        font-size: 0.7em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    v-row{
        text-align: justify;
    }
    v-col{
        display: block;
        text-align: justify;
        column-count: 2;
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
        margin-bottom: 6% !important;
    }
    button{
        box-sizing: border-box;
        border:none;
        background-color:#FEAE00;
        color:black;
        font-weight: bold;
        width: 15%;
        padding: 10px 20px;
        margin-top: 30px;
        border-radius: 5px;
        display:block;
        margin-left: 80%;
        cursor: pointer;
    }
</style>
