<template>
<div class="parameterBox">
    <div class="topSection">
        <div class="topOptionsBar flex flexEnd">
            <span class="flex alignItemsCenter">
                <span class="icon saveIcon pointer" v-if="unsavedChanges">save</span>
            </span>
        </div>
        <div class="cardTop"></div>
    </div>

    <div class="sitesParameters" v-for="(param, index) in params" :key="index">
        <div class='paramCard'>
            <div class="titleContainer">
                <span class="paramText">{{param.name}}</span>
                <span class="icon paramIcon">
                    <span class="icon pointer" :data-param="parameter" :data-index="index" v-if="params[index].visible == true" @click="params[index].visible = false">visibility</span>
                    <span class="icon pointer" :data-param="parameter" :data-index="index" v-if="params[index].visible == false" @click="params[index].visible = true">visibility_off</span>
                    <span class="icon pointer" :data-param="parameter" :data-index="index"  @click="params[index].open = false" v-if="params[index].open == true">expand_less</span>
                    <span class="icon pointer" :data-param="parameter" :data-index="index" @click="params[index].open = true" v-if="params[index].open == false">expand_more</span>
                </span>
            </div>

            <div :class="{ closedParam: params[index].open == false}">
                <ParamContent :param="params[index].name" />
            </div>
            

            <div class="cardTop"></div>
        </div>
    </div>

</div>
</template>

<script setup>
import { ref, watch } from 'vue'
import ParamContent from '@/components/sections/parameters/ParamContent'
import { liveParameters } from '@/edgar/explorer'

const unsavedChanges = ref(false)

//if liveParameters are updated, this will show the "save changes" icon
watch(liveParameters.value, () => {
    unsavedChanges.value = true
})
// <=

// remembers the states of each panels. open: if the panel is open or closed. visible: if it's visible in the recap section under the search bar.
const params = ref([
    {name: 'sites', open: true, visible: false}, {name: 'words', open: true, visible: false}, 
    {name: 'languages', open: false,visible: false}, {name: 'dates', open: false, visible: false} ])
// <=

//lis of the app's parameters
//TO DO: this should be in the data base at some point
const parameters = ref(['sites', 'words', 'languages', 'dates'])
// <=


// const paramExpandedState = ref({ sites: false, words: false, languages: false, dates: false })


</script>

<style scoped>

.parameterBox {
    width: 100%;
    height: 100%;
}
.topOptionsBar {
    padding: 5px 10px;
}
.saveIcon {
    font-size: 16px;
    color: var(--secondary-color);
}
.activeSave {
    color: green;
}
.inactiveSave {
    color: red;
}

.paramText {
    color: var(--secondary-color);
    font-size: 12px;
    font-weight: 300;
    padding: 0 0 5px 10px;
}
.paramIcon {
    font-size: 14px;
    color: var(--secondary-color);
    padding-right: 10px;
}
.cardTop {
    width: 100%;
    height: 10px;
    border: 1px solid var(--secondary-color);
    border-bottom: none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.paramCard {
    border: 1px solid var(--secondary-color);
    border-top: none;
    border-bottom: none;
}
.titleContainer {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
.closedParam {
    display: none;
}
</style>