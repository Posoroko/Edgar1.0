import { error, isPending } from '@/edgar/errorPending'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { loadBasicFolderData } from '@/composables/auth/loadBasicFolderData';
import { auth } from '@/firebase/config'
import { user } from '@/composables/auth/getUser'

const signup = async (email, password) => {

    if(isPending.value) {
        console.log('waite a minut!')
        return
    }

    console.log(isPending.value = true)
    error.value = false

    await createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            user.value = res.user
            console.log( 'user in signup:', res.user.uid)
        })
        .catch((err) => {
            console.log(err.message)
        });
    
    //populate the user's db with default data
    await loadBasicFolderData()
    // <=

    console.log(isPending.value = false)

}

const useSignup = () => {
    return signup
}

  export default useSignup