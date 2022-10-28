<template>

<section class="marginTop20">
    <div class="tabBox flex">
        <div 
            data-value="params" 
            class="tab paramTab" 
            @click.prevent="tabSelection" 
            :class="[tab == 'params' ? selected : unSelected]">Parameters</div>

        <div 
        data-value="results" 
        class="tab resultsTab" 
        @click.prevent="tabSelection" 
        :class="[tab == 'results' ? selected : unSelected]">Results</div>
    </div>

    <div class="content">
        <div v-if="tab == 'params'">
            <Parameters />
        </div>
    </div>
</section>

</template>

<script setup>
import { ref } from 'vue'
import Parameters from '@/components/sections/Parameters'

const tab = ref('params');

const selected = ref('selected')
const unSelected = ref('unSelected')

const tabSelection = (e) => {
    tab.value = e.target.getAttribute('data-value')
}

</script>

<style scoped>

.tabBox .tab {
    width: 50%;
    
    font-weight: 300;
    border: 1px solid var(--secondary-color);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display: grid;
    place-items: center;
    cursor: pointer;
}

.selected {
    color: var(--pramary-color);
    background-color: var(--secondary-color);
}

.unSelected {
    color: var(--secondary-color);
}

.content {
    width: 100%;
    border: 1px solid var(--secondary-color);
    margin-top: 3px;
}
</style>