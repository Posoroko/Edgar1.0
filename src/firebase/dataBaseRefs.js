import { ref } from 'vue'
import { doc } from "firebase/firestore"
import { db } from '@/firebase/config.js'

// export const folderDataRef = doc(db, "users/" + currentUser().uid, "folders/folderData")
export const folderDataRef = ref(doc(db, "users/xnhNDKPFoZYsEzWpAslpJvVaSXi1/folders/", "folderData"))
