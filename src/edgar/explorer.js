/*
This file keeps track of every parameters that needs to be shared with multiple components
*/

import { ref } from 'vue'
import { getFolderData } from '@/composables/loadExplorer'

//stores the index of the selected folder and search. It is used to acces it in the array where they are stored.
export const selectedFolder = ref('0')
export const selectedSearch = ref('0')

export const folderData = ref(null)

//stores the parameters for the selected search. User can modify them but needs to click "save" to save the changes. If another search is selected, these are updated and the changes are lost
// export const liveParameters = ref(folderData.value[selectedFolder.value].searches[selectedSearch].parameters)
// <=

export const selectedSearchContent = ref()

export const explorerHandlers = {
    folderSelection: (newFolder) => {
        selectedFolder.value = newFolder
    },
    searchSelection: (newSearch) => {
        selectedSearch.value = newSearch
    }
}


