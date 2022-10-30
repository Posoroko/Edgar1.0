import { getDoc } from "firebase/firestore"
import { folderData, liveParameters, selectedFolder, selectedSearch } from '@/edgar/explorer'
import { getFolderDataRef } from '@/firebase/dbRefs'
import { error, isPending } from '@/edgar/errorPending'

const getFolderData = async () => {

    if(isPending.value) {
        error.value = "Chill out man!"
        console.log(error.value)
        return
    }
    
    error.value = false
    console.log(isPending.value = true)

    await getDoc(getFolderDataRef()).then(res => {
        
        folderData.value = res.data()
        liveParameters.value = folderData.value.folders

        liveParameters.value = folderData.value.folders[selectedFolder.value].searches[selectedSearch.value].parameters

    }).catch((err) => {
        
        console.log(err.message)
    })


    console.log(isPending.value = false)
}

export { getFolderData }


