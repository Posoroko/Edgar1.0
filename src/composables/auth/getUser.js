import { ref }  from 'vue'
import { auth } from '@/firebase/config'
import { onAuthStateChanged } from "firebase/auth";

export const user = ref(auth.currentUser)

onAuthStateChanged(auth, _user => {
    
    user.value = _user

//condition to keep from logging the massive user objet to the console
    if(user.value) {
        console.log('user state changed, current user is: ', user.value.email)
    }else {
        console.log('user state changed, current user is: ', user.value)
    }
// <=

})


const getUser = () => {
    return user
}

export default getUser