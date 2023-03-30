import { projectAuth } from '../firebase/config';
import {ref} from "vue";

const user = ref()
projectAuth.onAuthStateChanged( _user =>{
    console.log('user state change current user is, ', _user)
    user.value = _user
})
const getUser = () => {
    return{user}
}
export default getUser