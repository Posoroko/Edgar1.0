<template>
    <section v-if="folderData">
        <TopSection />
        <FolderSection />
        <SearchSection />
        <ParamsAndResults />
    </section>

    <!-- <section v-if="!folderData" class="placeHolderText">
        hold on, we are getting there...
    </section> -->
    
</template>

<script setup>
import { watch } from 'vue'
import TopSection from '@/components/sections/TopSection.vue'
import FolderSection from '@/components/sections/FolderSection.vue'
import SearchSection from '@/components/sections/search/SearchSection.vue'
import ParamsAndResults from '@/components/sections/parameters/ParamsAndResults.vue'
import { folderData } from '@/edgar/explorer'
import { getUserData } from '@/composables/loadExplorer'
import { user } from '@/composables/auth/getUser'
import router from '@/router/index'

//import data from firestore
getUserData()
//<=

//is user becomes null, this will redirect to home page
watch(user, () => {
    if(!user.value) {
        router.push({ name: 'Home'})
    }
})
// <=


</script>

<style scoped>
p{
    color: white;
}
.placeHolderText {
    color: var(--secondary-color);
}
</style>