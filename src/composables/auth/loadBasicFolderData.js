import { setDoc } from 'firebase/firestore'
import { error, isPending } from '@/edgar/errorPending'
import { getUserDataRef } from '@/firebase/dbRefs'

export const loadBasicFolderData = async () => {

    isPending.value = true

    await setDoc(getUserDataRef(), defaultData )
        .then((res) => {

        }).catch((err) => {
            error.value = err.message
            console.log(err.message)
        })

    isPending.value = false
    
}

const defaultData = {
    displaySettings: {
       parameters: {
            sites: {
                quickAccess: true,
                paramPanel: true
            },
            words: {
                quickAcces: true,
                paramPanel: true
            },
            languages: {
                quickAccess: true,
                paramPanel: false
            },
            dates: {
                quickAccess: false,
                paramPanel: false
            }
       }
    },
    folders: [
        {
            name: 'favorites',
            searches: [
                {
                    name: 'pizza',
                    shownParameters: {
                        sites: {
                            searchBar: true,
                            paramPanel: true
                        },
                        words: {
                            searchBar: true,
                            paramPanel: true
                        },
                        languages: {
                            searchBar: true,
                            paramPanel: true
                        },
                        dates: {
                            searchBar: true,
                            paramPanel: true
                        }
                    },
                    parameters: {
                        sites: [
                            {
                                name: 'wikipedia',
                                solo: false,
                                mute: false
                            },
                            {
                                name: 'pizzanapoletana',
                                solo: true,
                                mute: false,
                            }
                        ],
                        words: [
                            {
                                name: 'pizza',
                                required: true,
                                mute: false
                            },
                            {
                                name: 'tradizionale',
                                required: true,
                                mute: false
                            }
                        ],
                        languages: [
                            {
                                name: 'it',
                                solo: true
                            }
                        ]
                    }
                },
                {
                    name: 'Detectorists',
                    parameters: {
                        sites: [
                            {
                                name: 'wikipedia',
                                solo: true,
                                mute: false
                            }
                        ],
                        words: [
                            {
                                name: 'England',
                                required: true,
                                mute: false
                            }
                        ],
                        languages: [
                            {
                                name: 'en',
                                solo: true
                            }
                        ]
                    }
                }
            ]
        }
    ]
}