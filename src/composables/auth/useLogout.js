import { auth } from '@/firebase/config'
import { error, isPending } from '@/edgar/errorPending'

const logout = async () => {

    if(isPending.value) {
        console.log(error.value = "chill out a mate!")
        return
    }

    isPending.value = true
    error.value = null

    try {

        await auth.signOut()
        console.log('user logged out')

    }catch(err) {
        console.log(error.value = err.message)
    }

    isPending.value = false

}

const useLogout = () => {
    return logout
}

export default useLogout