<template>
    <div class="topBar flex alignItemsCenter">
        <span class="flex alignItemsCenter">
            <img class="logo" src="@/assets/images/logo-edgar-small.jpg" alt="">
            <span class="edgar">Edgar</span>
        </span>
        <span class="menuIconBox">
            <span class="icon faceIcon pointer">face</span>
            <span class="icon logoutIcon pointer" @click="logout">logout</span>
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '@/firebase/config'
import useLogout from '@/composables/auth/useLogout'

const logout = useLogout()

</script>

<style scoped>
.topBar{
    padding: 10px 10px 10px 5px;
}

.logo {
    height: 18px;
    margin-right: 5px;
}
.edgar {
    color: var(--secondary-color);
}
.menuIconBox {
    margin-left: auto;
}

.faceIcon {
    margin-right: 5px;
}

.logoutIcon, .faceIcon {
    font-size: 20px;
    color: var(--secondary-color);
}

</style>