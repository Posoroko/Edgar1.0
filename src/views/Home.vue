<template>  
  <section class="fullPage">
    <TopSection />
    <!-- <header class="flex column alignItemsCenter center marginTop50">
        <div class="frame">
        <img class="logo" src="@/assets/images/logo-edgar-small.jpg" alt="">
        </div>

        <p class="text">
            Edgar
        </p>
    </header> -->

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

      <input id="passwordInput" type="password" placeholder="password" v-model="password">

      <div class="buttonBox centered marginTop20">
        <button class="button soloBtn solidFrame" v-if="!isNewUser" @click.prevent="handleClick">log in</button>
        <button class="button soloBtn solidFrame" v-if="isNewUser" @click.prevent="handleClick">create account</button>
      </div>
    
    </form>


  </section>
</template>

<script setup>
import { ref} from 'vue'
import TopSection from '@/components/sections/TopSection'
import useLogin from '@/composables/auth/useLogin'
import useSignup from '@/composables/auth/useSignup'
import { error } from '@/edgar/errorPending'
import router from '@/router/index'
import { user } from '@/composables/auth/getUser'

const isNewUser = ref(false)
const signup = useSignup()

const login = useLogin()

// const name = ref("")
const email = ref("")
const password = ref("")

const handleClick = async () => {

    if(!formIsValid()) {
        console.log('Something is not ok...')
        error.value = true
        return
    }

    if(!isNewUser.value) {
      await login(email.value, password.value)
    } else {
      await signup(email.value, password.value)
    }
  
    router.push({ name: 'AskEdgar'})

}


const formIsValid = () => {

    //will need more elaborate form validation
    if(email.value && password.value) {
        return true
    }

    return false

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