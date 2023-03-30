import { projectAuth } from '../firebase/config';
import {ref} from "vue";

const error = ref(null)

const signup = async (name, email, number, company, user, password, country, city) => {
    error.value = null

    try{
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        if (!res){
            throw new Error('could not complete the signup')
        }

        error.value = null
        console.log(res.user)
        return res

    }catch(err){
        console.log(err.message)
        error.value = err.message
    }
}

const useSignUp = () => {
    return{ error, signup }
}
export default useSignUp