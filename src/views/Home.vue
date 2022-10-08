<template>
  <header class="flex column alignItemsCenter center marginTop50">
    <div class="frame">
      <img class="logo" src="@/assets/images/logotemporaire.png" alt="">
    </div>

    <p class="text">
      Edgar
    </p>
  </header>
  
  <main>
    <div class="width100 flex center">
      <div class="buttonStripeBox btn20px selectorBox">
        <div class="button wireframe" @click="isNewUser = false" :class="{ selected: !isNewUser }">
          log in
        </div>
        
        <div class="button wireframe" @click="isNewUser = true" :class="{ selected: isNewUser }">
          sing up
        </div>
      </div>
    </div>
    <form class="flex column marginTop20" @submit.prevent>

      <div v-if="isNewUser">
        <!-- <label for="nameInput">name</label> -->
        <input id="nameInput" type="text" placeholder="name">
      </div>
      
      <!-- <label for="emailInput">email</label> -->
      <input id="emailInput" type="text" placeholder="email">

      <!-- <label for="passwordInput">password</label> -->
      <input id="passwordInput" type="password" placeholder="password">

      <div class="buttonBox centered marginTop20">
        <button class="button soloBtn solidFrame" v-if="!isNewUser" @click.prevent>sign in</button>
        <button class="button soloBtn solidFrame" v-if="isNewUser" @click.prevent>create account</button>
      </div>
    
    </form>


  </main>
</template>

<script setup>
import { images } from '@/config/config.js'
import { ref} from 'vue'


const isNewUser = ref(false)


</script>

<style scoped>
.logo {
  width: 100px;
}

input {
  color: var(--secondary-color);
  background-color: var(--primary);
  border-bottom: 1px solid var(--secondary-color);
  margin-top: 20px;
}
input::placeholder {
  color: var(--secondary-color-faded);
}

</style>