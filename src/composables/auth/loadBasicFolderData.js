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
                name: 'basics',
                searches: [
                    {
                        name: 'wiki',
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
                                    name: 'pizza',
                                    required: true,
                                    mute: false
                                }
                            ]
                        }
                    },
                    {
                        name: 'pizza',
                        parameters: {
                            sites: [
                                {
                                    name: 'pizza',
                                    solo: true,
                                    mute: false
                                }
                            ],
                            words: [
                                {
                                    name: 'Napoli',
                                    required: true,
                                    mute: false
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
                            ]
                        }
                    }
                ]
            }
        ]
    }

    await setDoc(folderDataRef, emptyData )
        .then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err.message)
        })


    isPending.value = false
    
}