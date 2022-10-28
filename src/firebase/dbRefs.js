import { ref } from 'vue'
import { doc, collection } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { getUser } from '@/composables/auth/getUser'

export const folderDataRef = ref(null)

export const createRefs = () => {
    let userUid = getUser().uid
    folderDataRef.value = doc(db, 'users', userUid, "folders", "folderData")
}