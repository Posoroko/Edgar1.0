/*
This file keeps track of every parameters that needs to be shared with multiple components
*/

import { ref } from 'vue'
import { getFolderData } from '@/composables/loadExplorer'

//stores the index of the selected folder and search. It is used to acces it in the array where they are stored.
export const selectedFolder = ref('0')
export const selectedSearch = ref('0')

export const folderData = ref(null)
getFolderData()

export const selectedSearchContent = ref()

export const explorerHandlers = {
    folderSelection: (newFolder) => {
        selectedFolder.value = newFolder
    },
    searchSelection: (newSearch) => {
        selectedSearch.value = newSearch
    }
}


