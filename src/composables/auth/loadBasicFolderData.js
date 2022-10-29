import { setDoc } from 'firebase/firestore'
import { error, isPending } from '@/edgar/errorPending'
import { doc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { userUid } from '@/composables/auth/getUser'

export const loadBasicFolderData = async () => {

    let folderDataRef =  doc(db, 'users', userUid.value, 'folders', "folderData")

    isPending.value = true

    const emptyData = {
        folders: [
            {
                name: 'favorites',
                searches: [
                    {
                        name: 'pizza',
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

    await setDoc(folderDataRef, emptyData )
        .then((res) => {

        }).catch((err) => {
            console.log(err.message)
        })


    isPending.value = false
    
}