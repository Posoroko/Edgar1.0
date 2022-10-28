import { ref } from 'vue'
import { folderData, selectedFolder, selectedSearch } from '@/edgar/explorer'
import { error, isPending} from '@/edgar/errorPending'
import { setDoc } from "firebase/firestore"
import { folderDataRef } from '@/firebase/dataBaseRefs'

let tempFolderData = null

export const addFolder = async (newFolderName) => {

    if(isPending.value) {
        error.value = "Easy tiger, hold on a minut!"
        return
    }
    error.value = null
    isPending.value = true

    await setDoc(folderDataRef.value, createTempFolderDataWithNewFolder(newFolderName)).then((res) => {
        folderData.value = tempFolderData
    }).catch((err) => {
        console.log(err.message)
    })
    
    isPending.value = false
    if(!error.value) {
        return true
    }
    
    return false
}


const createTempFolderDataWithNewFolder = (newFolderName) => {
    let newFoldersList = folderData.value.folders
    newFoldersList.push({
        name: newFolderName,
        searches: [],
    })
    tempFolderData = folderData.value
    tempFolderData.folders = newFoldersList

    return tempFolderData
}

export const addSearch = async (newSearchName) => {
    console.log(isPending.value)
    if(isPending.value) {
        error.value = "Easy tiger, hold on a minut!"
        return
    }
    
    error.value = null
    isPending.value = true

    await setDoc(folderDataRef.value, createTempFolderDataWithNewSearch(newSearchName)).then((res) => {
        folderData.value = tempFolderData
    }).catch((err) => {
        console.log(err.message)
    })
    
    isPending.value = false
    if(!error.value) {
        return true
    }
    return false
}

const createTempFolderDataWithNewSearch = (newFolderName) => {
    let newSearchesList = folderData.value.folders[selectedFolder.value].searches

    newSearchesList.push({
        name: newFolderName
    })
    tempFolderData = folderData.value
    tempFolderData.folders[selectedFolder.value].searches = newSearchesList

    return tempFolderData
}

export const deleteFolder = (index) => {



}