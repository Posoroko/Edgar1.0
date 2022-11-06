import { ref } from 'vue'

//languages: array of strings => 'en', 'fr', etc
const languages = ref([])
// <=

//true when a site is marked as 'solo'
const solo = ref(false);
// <=

//list of sites, banned or not
// objects in array look like this:

    // {
    //     name: 'marmitons',
    //     solo: false, //only site in query
    //     mute: true, //banned from query
    // }

const inUrl = ref([])
// <=

//setting for the display of search parameters. Remembers wether the param is displayed or not, in the param panel and the quickacces panel under the main search bar.
export const paramSettings = ref(null)
// <=

// methods for creating, removig, modifying a saved url reference
const handleNewUrl = {

    add: (url) => {inUrl.value.push({ name: url.toLowerCase(), solo: false, mute: true})},
    remove: (url) => {
        let index = inUrl.value.findIndex((obj) => {obj.name = url.toLowerCase()})
        inUrl.value.splice(index, 1)
    },

    //index of url + true to mute out , false to unmute
    mute: (index, trueOrFalse) => {
        if(trueOrFalse = true) { inUrl.value[index].mute = true }
        else { inUrl.value[index].mute = false }},

    solo: (index) => {
        solo.value = true
        for(let i = 0; i < inUrl.length; i++) {
            if(i == index) { inUrl.value[i].solo = true }
            else { inUrl.value[i].solo = false }
        }
    },
    stopSolo: (index) => {

        solo.value = false;

        inUrl.value[index].solo = false

    }
}
// <=


//this function accepts an abreviation: 'en', 'fr', 'es', etc.
const handleLanguage = {
    add: (lang) => {
        if(languagesAlreadyIncludes(lang)) { return } 
        languages.value.push(lang)
    },
    remove: (lang) => {
        if(!languagesAlreadyIncludes(lang)) { return }
        languages.value.splice(indexOf(lang), 1)
    }
}
// <=

//checks if language is already recorded
const languagesAlreadyIncludes = (lang) => {
    if(languages.value.includes(lang)) { return false }
    return true
}
// <=