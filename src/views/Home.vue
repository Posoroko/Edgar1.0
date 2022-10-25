<template>  
  <section class="fullPage">
    <header class="flex column alignItemsCenter center marginTop50">
        <div class="frame">
        <img class="logo" src="@/assets/images/logotemporaire.png" alt="">
        </div>

        <p class="text">
            Edgar
        </p>
    </header>

    <div class="width100 flex center">
      <div class="buttonStripeBox btn20px selectorBox">
        <div class="button wireFrame" @click="isNewUser = false" :class="{ selected: !isNewUser }">
          log in
        </div>
        
        <div class="button wireFrame" @click="isNewUser = true" :class="{ selected: isNewUser }">
          sing up
        </div>
      </div>
    </div>

    <form class="flex column marginTop20" @submit.prevent>
      
      <input id="emailInput" type="text" placeholder="email" v-model="email">
      <p>{{email}}</p>

      <input id="passwordInput" type="password" placeholder="password" v-model="password">

      <div class="buttonBox centered marginTop20">
        <button class="button soloBtn solidFrame" v-if="!isNewUser" @click.prevent>sign in</button>
        <button class="button soloBtn solidFrame" v-if="isNewUser" @click.prevent="createAccount">create account</button>
      </div>
    
    </form>


  </section>
</template>

<script setup>
import { images } from '@/config/config.js'
import { ref} from 'vue'
import { auth } from '@/firebase/config'
import router from '@/router/index'

import { createUserWithEmailAndPassword } from "firebase/auth";

const isPending = ref(false)
const error = ref(false)
const errorMessage = ref("")

const isNewUser = ref(false)

// const name = ref("")
const email = ref("")
const password = ref("")

const createAccount = async () => {
    
    if(isPending.value) {
        return
    }

    isPending.value = true
    error.value = false

    if(!singUpFormIsValid) {
        console.log('Something is not ok...')
        error.value = true
        return
    }

    await createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err.message)
        });

    if(!error.value) {
        email.value = ""
        password.value = ""
    }

    isPending.value = false
    router.push({ path: '/search' })
}

const singUpFormIsValid = () => {

    //will need more elaborate form validation
    if(email.value && password.value) {
        return true
    }


}

</script>

<style scoped>

.fullPage {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.logo {
    width: 100px;
}
.buttonStripeBox {
    margin-top: 10vh;
}
input {
    width: 100%;
    color: var(--secondary-color);
    background-color: var(--primary);
    padding: 5px 10px 3px 10px;
    border-bottom: 1px solid var(--secondary-color);
    margin-top: 20px;
}
input::placeholder {
    color: var(--secondary-color-faded);
}

</style>