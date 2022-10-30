import { doc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { auth } from '@/firebase/config'

export const getFolderDataRef = () => {

  return doc(db, 'users', auth.currentUser.uid, "folders", "folderData")

}
