import { getDoc } from "firebase/firestore"
import { folderData, liveParameters, selectedFolder, selectedSearch } from '@/edgar/explorer'
import { getUserDataRef } from '@/firebase/dbRefs'
import { error, isPending } from '@/edgar/errorPending'
import { displaySettings } from "@/edgar/displaySettings"

export const getUserData = async () => {

    if(isPending.value) {
        error.value = "Chill out man!"
        console.log(error.value)
        return
    }
    
    error.value = false
    console.log(isPending.value = true)

    await getDoc(getUserDataRef()).then(res => {
        
        loadImportedData(res.data())
        
    }).catch((err) => {
        
        console.log(err.message)
    })


    console.log(isPending.value = false)
}

const loadImportedData = (userData) => {
    folderData.value = userData.folders;
    displaySettings.value = userData.displaySettings
    liveParameters.value = folderData.value[selectedFolder.value].searches[selectedSearch.value].parameters
    console.log(displaySettings.value)
}




