<template>
    <section v-if="folderData">
        <TopSection />
        <FolderSection />
        <SearchSection />
        <ParamsAndResults />
    </section>

    <section v-if="!folderData">
        hold on, we are getting there...
    </section>
    
</template>

<script setup>
import TopSection from '@/components/sections/TopSection.vue'
import FolderSection from '@/components/sections/FolderSection.vue'
import SearchSection from '@/components/sections/SearchSection.vue'
import ParamsAndResults from '@/components/sections/ParamsAndResults.vue'
import { getFolderData } from '@/composables/loadExplorer'
import { folderData } from '@/edgar/explorer'

getFolderData()

</script>

<style scoped>

</style>