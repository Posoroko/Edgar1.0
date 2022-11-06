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

    <div class="sitesParameters" v-for="(parameter, index) in parameters" :key="index">
        <div class='paramCard'>
            <div class="titleContainer">
                <span class="paramText">{{parameter}} {{displaySettings.parameters[parameter].quickAccess}} </span>
                <span class="icon paramIcon">
                    <span class="icon pointer" :data-param="parameter" :data-index="index" v-if="displaySettings.parameters[parameter].quickAccess" @click="toggleParamDisplay(parameter, 'quickAccess')">visibility</span>
                    <span class="icon pointer" :data-param="parameter" :data-index="index" v-if="!displaySettings.parameters[parameter].quickAccess" @click="toggleParamDisplay(parameter, 'quickAccess')">visibility_off</span>
                    <span class="icon pointer" :data-param="parameter" :data-index="index" v-if="displaySettings.parameters[parameter].paramPanel == false"  @click="toggleParamDisplay(parameter, 'paramPanel')">expand_more</span>
                    <span class="icon pointer" :data-param="parameter" :data-index="index" v-if="displaySettings.parameters[parameter].paramPanel == true"  @click="toggleParamDisplay(parameter, 'paramPanel')">expand_less</span>
                </span>
            </div>

            <div :class="{ closedParam: displaySettings.parameters[parameter].paramPanel == false}">
                <ParamContent :param="parameter" />
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
import { displaySettings } from '@/edgar/displaySettings'
import { toggleParamDisplay } from '@/composables/display'

const unsavedChanges = ref(false)

//if liveParameters are updated, this will show the "save changes" icon
watch(liveParameters.value, () => {
    unsavedChanges.value = true
})
// <=


const parameters = ref(["sites", "words", "languages", "dates"])


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