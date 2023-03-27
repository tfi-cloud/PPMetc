<template>
    <div class="sign-up">

        <a class="header">Start your free trial</a>

        <form @submit.prevent="handleSubmit">

            <label>Full name *</label>
            <input type="text" required v-model="fullname">

            <label>Email *</label>
            <input type="email" required v-model="email">

            <label>Phone number *</label>
            <input type="tel" required v-model="number">

            <label>Company *</label>
            <input type="text" required v-model="company">

            <label>User *</label>
            <input type="text" required v-model="username">

            <label>Password *</label>
            <input type="password" required v-model="password">

            <label>Country *</label>
            <input type="text" required v-model="country">

            <label>City *</label>
            <input type="text" required v-model="city">

            <router-link to="/login"> <button>Sign Up</button> </router-link>
            
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import useSignUp from '../composables/useSignUp';
import { timestamp } from '../firebase/config'
import useCollection from '../composables/useCollection';

export default {
    setup(){

        //refs
        const fullname = ref('')
        const email = ref('')
        const number = ref('')
        const company = ref('')
        const username = ref('')
        const password = ref('')
        const country = ref('')
        const city = ref('')


        //use SignUp
        const {error, signup} = useSignUp()
        const { addDoc } = useCollection('users')

        const handleSubmit = async () => {

            await signup(fullname.value, email.value, number.value, company.value, username.value, password.value, country.value, city.value).then(() => {
            
                const user = {
                fullname: fullname.value,
                email: email.value,
                number: number.value,
                company: company.value,
                username: username.value,
                password: password.value,
                country: country.value,
                city: city.value,
                createdAt: timestamp()
            }
            
            addDoc(user)
            if (!error.value) {
                fullname.value = '',
                number.value = '',
                company.value = '',
                username.value = '',
                country.value = '',
                city.value = ''
            }
            })
            console.log("user sign up!")
        }

        return { fullname, email, number, company, username, password, country, city, handleSubmit }
    }
}
</script>

<style scoped>
    .sign-up{
        position: relative;
        margin-top: 3%;
    }
    form{
        margin: 0px auto;
        max-width: 40%;
        background: #EFEFEF;
        text-align: left;
        padding: 20px;
        padding-left: 30px;
        border-radius: 10px;
        display: grid;
        grid-template-columns: 30% 60%;
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
        width: 50%;
        padding: 10px 20px;
        margin-top: 10px;
        border-radius: 5px;
        display:block;
        cursor: pointer;
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
</style>
