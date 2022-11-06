import { doc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { auth } from '@/firebase/config'

export const getUserDataRef = () => {

  return doc(db, 'users', auth.currentUser.uid, "data", "userData")

}

// export const getParamSettingsRef = () => {

//   return doc(db, 'users', auth.currentUser.uid, "folders", "folderData")

// }