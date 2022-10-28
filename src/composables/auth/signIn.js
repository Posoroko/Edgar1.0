import { ref } from 'vue'
import { error, isPending } from '@/edgar/errorPending'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase/config'
import router from '@/router/index'
import { userUid } from '@/composables/auth/getUser'
import { createRefs } from '@/firebase/dbRefs'

const signIn = async (email, password) => {

      if(isPending.value) {
        console.log("dude! it's pending!!")
          return
      }
  
      isPending.value = true
      error.value = false
  
    await signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
            userUid.value = data.user.uid
            createRefs()
        })
        .catch((err) => {
            console.log(err.message)
            error.value = err.message
        })
    
    if(!error.value) {
      router.push({ path: '/ask-edgar' })
    }
    
    isPending.value = false
    
  }

  export { signIn }