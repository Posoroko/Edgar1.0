import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from '@/firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

import '@/assets/css/main.css'


let app
//waiting for initial uservalue before rendering the app. This prevents the user from being redirected to homepage when refreshing a page
onAuthStateChanged(auth, () => {
    if(!app) {
        app = createApp(App).use(router).mount('#app')
    }
})
// <=

window.addEventListener('keydown', (e) => {
    console.log(e.key)
    if(e.key == "F6") {
        console.log('eric')
        window.open("https://fonts.google.com/icons", '_blank').focus()
    } 
})