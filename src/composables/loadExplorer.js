import { ref } from 'vue'
import { getDoc } from "firebase/firestore"

import { folderData } from '@/edgar/explorer'
import { folderDataRef} from '@/firebase/dataBaseRefs'
import { error, isPending } from '@/edgar/errorPending'

const getFolderData = async () => {

    if(isPending.value) {
        error.value = "Chill out man!"
        return
    }

    error.value = false
    isPending.value = true
    
    await getDoc(folderDataRef.value).then(res => {
        folderData.value = res.data()
    }).catch((err) => {
        console.log(err.message)
    })

    isPending.value = false
}

export { getFolderData, folderDataRef }