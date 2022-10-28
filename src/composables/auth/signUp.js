import { error, isPending } from '@/edgar/errorPending'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase/config'
import router from '@/router/index'
import { loadBasicFolderData } from '@/composables/auth/loadBasicFolderData';
import { userUid } from '@/composables/auth/getUser'
import { createRefs } from '@/firebase/dbRefs'

const signUp = async (email, password) => {

    if(isPending.value) {
        return
    }

    isPending.value = true
    error.value = false

    await createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            userUid.value = data.user.uid
            createRefs()
        })
        .catch((err) => {
            console.log(err.message)
        });
    
    await loadBasicFolderData()

    if(!error.value) {
        router.push({ path: '/ask-edgar' })
    }

    isPending.value = false

}

  export { signUp }