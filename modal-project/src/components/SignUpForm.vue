<template>
    <div class="sign-up">

        <form @submit.prevent="handleSubmit">

           <div class="header"> <a class="header">Start your free trial</a></div>

            <div> 
                
                <label>Full name *</label>
                <input type="text" required v-model="fullname">

                <label>Email *</label>
                <input type="email" required v-model="email">

                <label>Phone number *</label>
                <input type="tel" required v-model="number">

                <label>Company *</label>
                <input type="text" required v-model="company">

            </div>

            <div> 
                <label>User *</label>
                <input type="text" required v-model="displayName">

                <label>Password *</label>
                <input type="password" required v-model="password">

                <label>Country *</label>
                <input type="text" required v-model="country">

                <label>City *</label>
                <input type="text" required v-model="city">

            </div>
            <button>Sign Up</button>
            <div class="error">{{ error }}</div> 
            <div class="success">{{ successful }}</div>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import useSignUp from '../composables/useSignUp';
import { timestamp } from '../firebase/config'
import useCollection from '../composables/useCollection';

export default {
    setup(props,context){

        //refs
        const fullname = ref('')
        const email = ref('')
        const number = ref('')
        const company = ref('')
        const displayName = ref('')
        const password = ref('')
        const country = ref('')
        const city = ref('')
        const successful = ref('')


        //use SignUp
        const {error, signup} = useSignUp()
        const { addDoc } = useCollection('users')

        const handleSubmit = async () => {

            await signup(fullname.value, email.value, number.value, company.value, displayName.value, password.value, country.value, city.value).then(() => {
            
                const user = {
                fullname: fullname.value,
                email: email.value,
                number: number.value,
                company: company.value,
                displayName: displayName.value,
                password: password.value,
                country: country.value,
                city: city.value,
                createdAt: timestamp()
            }
            if (!error.value) {
                //if there is no error add the info of the user and then clean all the fields
                addDoc(user)
                password.value = '',
                email.value = '',
                fullname.value = '',
                number.value = '',
                company.value = '',
                displayName.value = '',
                country.value = '',
                city.value = ''
                successful.value = 'You have successfully registered' 
                //function to redirect if the user login correctly
                context.emit('signup')
            }

            })
            
        }

        return { fullname, email, number, company, displayName, password, country, city, handleSubmit, error, successful }
    }
}
</script>

<style scoped>
    .sign-up{
        position: relative;
        margin-top: 40px;
    }
    form{
        margin: 40px auto;
        max-width: 60%;
        background: white;
        text-align: left;
        padding: 60px;
        padding-left: 60px;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    form > div{
        width: 50%;
    }
    a .header{
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
    input{
        display:block;
        padding: 10px 5px 10px 5px;
        width: 90%;
        box-sizing: border-box;
        border:none;
        border: 1px solid #ddd;
        color:#646464;
        background-color: white;
        margin-bottom: 6% !important;
    }
    button{
        border:none;
        background-color:#FEAE00;
        color:black;
        font-weight: bold;
        width: 13%;
        padding: 10px 20px;
        margin-top: 10px;
        border-radius: 5px;
        display:block;
        cursor: pointer;
        margin-bottom: 20px;
    }
    a{
        text-decoration: none;
        font-size: 1.0em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
        display:block;
        padding-bottom: 5px;
    }
    button:hover{
        background-color:#ECA60E;
    }
    .error{
        margin: 0px auto;
        text-align: center;
        color:#CE0F0F;
        display: inline-block;
        width: 100%;
    }
    .success{
        margin: 0px auto;
        text-align: center;
        color:#48A60F;
        display: inline-block;
        width: 100%;
    }
    div.header{
        width: 100%;
        margin-bottom: 40px;
        
    }
    a.header{
        color: #68737e
    }
</style>
