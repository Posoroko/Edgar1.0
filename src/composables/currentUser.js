import { getAuth } from "firebase/auth"

export const currentUser = () => {
    const auth = getAuth()
    const user = auth.currentUser
    
    return user
}