import { error, isPending } from '@/edgar/errorPending'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase/config'
import { user } from '@/composables/auth/getUser'


  export const login = async (email, password) => {

    if(isPending.value) {
      console.log("chill out mate!")
      return false
    }

    error.value = null
    console.log(isPending.value = true)

    await signInWithEmailAndPassword(auth, email, password).then((res) => {
      
      user.value = res.user

    }).catch(err => {
      console.log(err.message)
      error.value = 'Incorrect login credentials'
    })

    console.log(isPending.value = false)

  }

  const useLogin = () => {
    return login
  }

export default useLogin