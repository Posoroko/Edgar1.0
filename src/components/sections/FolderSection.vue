<template>
    <section class="folderSection flex spaceEvenly">
        <div class="explorerBox halfSection">
                <span class="explorerLine" :ref="folderList" v-for="(folder, index) in folderData" :key="index" :data-index="index">
                    <span class="pointer explorerText" @click="selectFolder(index)">
                        <span class="icon explorerIcon" v-if="selectedFolder == index">folder_open</span>
                        <span class="icon explorerIcon" v-if="selectedFolder != index">folder</span>
                        <span :class="{ selected: selectedFolder == index}" >{{folder.name}}</span>
                    </span>

                    <span class="options">
                        <span class="icon closeBtn" @click="editFolderName" :data-index="index">edit</span>
                        <span class="icon closeBtn" @click="deleteFolder" :data-index="index">close</span>
                    </span>
                </span>

                <span>
                    <span v-show="!creatingNewFolder" class="pointer explorerText" @click="requestNewFolder">
                        <span class="icon  explorerIcon">create_new_folder</span>
                        <span>new folder</span>
                    </span>
                    
                    <div v-show="creatingNewFolder" class="flex alignItemsCenter width100" id="newFolderInputBox">
                        <input class="newElementInput explorerText" ref="newFolderInput" id="newFolderInput" placeholder="new folder name">
                        <span class="icon pointer" id="createFolderBtn" @click="createNewFolder">add</span>
                    </div>
                </span>
        </div>

        <div class="folderBox halfSection">
            <div class="width100 tabContainer">
                <div class="folderTab">
                    {{folderData[selectedFolder].name}}
                    <div class="borderHack"></div>
                </div>
            </div>
            
            <div class="folderContent">
                <div v-if="folderData[selectedFolder].searches">
                    <div class="searchName explorerLine" v-for="(search, index) in folderData[selectedFolder].searches" :key="index" >
                        <span class="explorerText pointer" @click="selectSearch(index)">
                            <span class="icon pointer" v-if=" selectedSearch == index">
                                arrow_right
                            </span>
                            
                            <span :class="{ 'selected': selectedSearch == index}">
                                {{search.name}}
                            </span>
                        </span>

                        <span class="options">
                            <span class="icon closeBtn" @click="editSearchName" :data-index="index">edit</span>
                            <span class="icon closeBtn" @click="deleteSearch" :data-index="index">close</span>
                        </span>
                        
                    </div>

                    <div>
                        <span v-show="!creatingNewSearch" class="pointer explorerText" @click="requestNewSearch">
                            <span class="icon">add</span>

                            <span>new search</span>
                        </span>
                        <div v-show="creatingNewSearch" class="flex alignItemsCenter">
                            <input class="newElementInput explorerText" ref="newSearchInput" id="newSearchInput" placeholder="new search name">
                            <span class="icon" id="newSearchBtn" @click="createNewSearch">add</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { selectedFolder, selectedSearch, folderData } from '@/edgar/explorer.js'
import { addFolder, addSearch } from '@/composables/updateFolderData'
import { error, isPending } from '@/edgar/errorPending'
import { getUsererData } from '@/composables/loadExplorer'

//All about folders
const creatingNewFolder = ref(false)
const newFolderInput = ref(null)

const selectFolder = (folder) => {
    selectedFolder.value = folder
    //selects the first search of the selected folder
    selectedSearch.value = '0'
}

const requestNewFolder = () => {
    creatingNewFolder.value = true
    window.addEventListener('click', closeNewFolderInput, true)
    // wait for dom to update, it needs a better solution
    setTimeout(() => {
        newFolderInput.value.focus()
        
    }, 100)
}
// close the input when user clickes anywhere else on the page
const closeNewFolderInput = (e) => {
    
    if(e.target.id == "newFolderInput" || e.target.id == "createFolderBtn") {
        return
    }
    creatingNewFolder.value = false
    window.removeEventListener('click', closeNewFolderInput, true)
}
// <=

const createNewFolder = async () => {
    if(!newFolderInput.value.value) {
        return
    }
    if(await addFolder(newFolderInput.value.value)) {
        creatingNewFolder.value = false
        newFolderInput.value.value = ''
    }
}

const deleteFolder = async (index) => {
    
}





//All about searches
const newSearchInput = ref(null)
const creatingNewSearch = ref(false)

const selectSearch = (index) => {
    selectedSearch.value = index
}

const requestNewSearch = () => {
    creatingNewSearch.value = true
    window.addEventListener('click', closeNewSearchInput, true)
    setTimeout(() => {
        newSearchInput.value.focus()
        
    }, 1000)

}
// close the input when user clicks anywhere else on the page
const closeNewSearchInput = (e) => {
    console.log(e.target)
    if(e.target.id == "newSearchInput" || e.target.id == "createSearchBtn") {
        console.log('eric')
    }
    creatingNewSearch.value = false
    window.removeEventListener('click', closeNewSearchInput, true)
}
// <=

const cancleNewSearch = () => {
    creatingNewSearch.value = false
}

const createNewSearch = async () => {
    if(!newSearchInput.value.value) {
        console.log('no input')
        return
    }
    let newName = newSearchInput.value.value
    creatingNewSearch.value = false
    if(await addSearch(newSearchInput.value.value)) {
        return
    }
    creatingNewSearch.value = true
    newSearchInput.value.value = newName
}

</script>

<style scoped>

.folderSection {
    height: 124px;
    margin-top: 10px;
}

.halfSection {
    width: 46%;
    color: var(--secondary-color);
}

.explorerText {
    font-size: 16px;
    font-weight: 300;
    display: inline-flex;
    align-items: center;
}
.explorerBox {
    height: 100%;
    padding: 5px;
    border-top: 1px solid var(--secondary-color);
    border-bottom: 1px solid var(--secondary-color);
    display: flex;
    flex-direction: column;
    overflow: scroll;
}
.explorerLine {
    display: flex;
    justify-content: space-between;
}
.options {
    display: none;
}
.options .closeBtn {
    font-size: 10px;
}
.explorerLine:hover .options {
    display: inline;
}

.explorerIcon {
    font-size: 12px;
    padding-right: 5px;
}

.newElementInput {
    width: 85%;
    color: var(--secondary-color);
    outline: none;
    border-bottom: 1px solid var(--secondary-color);
    /* display: inline; */
}


.folderBox {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
}

.tabContainer {
    align-self: flex-start;
}
.folderTab {
    height: 24px;
    font-size: 12px;
    font-weight: 300;
    padding: 3px 10px 0px 10px;
    border: 1px solid var(--secondary-color);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: inline-block;
    position: relative;
    z-index: 1000;
}
.borderHack {
    width: 100%;
    height: 4px;
    background-color: var(--primary-color);
    position: absolute;
    left: 0;
    bottom: -2px;
}
.folderContent {
    width: 100%;
    height: 100px;
    padding: 5px 10px;
    border: 1px solid var(--secondary-color);
    border-radius: 10px;
    border-top-left-radius: 0px;
    overflow: scroll;
}
.searchName {
    font-size: 12px;
    font-weight: 200;
    display: flex;
    align-items: center;
}
.selected {
    font-weight: 500;
}
</style>