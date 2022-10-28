import { ref }  from 'vue'
import { getAuth } from 'firebase/auth'

export const userUid = ref(null)

export const getUser = () => {
    return getAuth().currentUser
}