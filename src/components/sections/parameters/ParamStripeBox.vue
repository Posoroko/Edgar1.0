<template>
    <div class="paramStripeBox" v-if="liveParameters">
        <div class="siteStripe buttonStripeBox" v-if="displaySettings.parameters.sites.quickAccess">
            <span class="button solidFrame flex alignItemsCenter" v-for="(site, index) in liveParameters.sites" :key="index" >
                <span class="paramName">{{site.name}}</span>
                <span class="flex alignItemsCenter">
                    <span class="icon" 
                    data-paramType="sites" 
                    :class="{activeMute : liveParameters.sites[index].mute == true}"
                    @click="toggleMute(index, $event)">cancel</span>
                    <span class="icon" 
                    data-paramType="sites" 
                    :class="{activeSolo : liveParameters.sites[index].solo == true}"
                    @click="toggleSolo(index, $event)">check_box</span>
                </span>
            </span>

            <span class="icon paramIcon">
                <span class="icon pointer" v-if="displaySettings.parameters['sites'].quickAccess" @click="toggleParamDisplay('sites', 'quickAccess')">visibility</span>
                <span class="icon pointer" v-if="!displaySettings.parameters['sites'].quickAccess" @click="toggleParamDisplay('sites', 'quickAccess')">visibility_off</span>
            </span>
        </div>
        
        <div class="wordStripe buttonStripeBox" v-if="displaySettings.parameters.words.quickAccess">
            <span class="button solidFrame flex alignItemsCenter" v-for="(word, index) in liveParameters.words" :key="index" >
                <span class="paramName">{{word.name}}</span>
                <span class="flex alignItemsCenter">
                    <span class="icon" 
                    data-paramType="words" 
                    :class="{activeMute : liveParameters.words[index].mute == true}"
                    @click="toggleMute(index, $event)">cancel</span>
                    <span class="icon" 
                    data-paramType="words" 
                    :class="{activeSolo : liveParameters.words[index].solo == true}"
                    @click="toggleSolo(index, $event)">check_box</span>
                </span>
            </span>

            <span class="icon paramIcon">
                <span class="icon pointer" v-if="displaySettings.parameters['words'].quickAccess" @click="toggleParamDisplay('words', 'quickAccess')">visibility</span>
                <span class="icon pointer" v-if="!displaySettings.parameters['words'].quickAccess" @click="toggleParamDisplay('words', 'quickAccess')">visibility_off</span>
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref }  from 'vue'
import { liveParameters } from '@/edgar/explorer'
import { displaySettings } from '@/edgar/displaySettings'
import { toggleParamDisplay } from '@/composables/display'

const toggleMute = (index, e) => {
    const paramType = e.currentTarget.getAttribute('data-paramType')
    liveParameters.value.sites[index].mute = !liveParameters.value.sites[index].mute

}
const toggleSolo = (index, e) => {
    const paramType = e.currentTarget.getAttribute('data-paramType')
    liveParameters.value.sites[index].solo = !liveParameters.value.sites[index].solo
}

</script>

<style scoped>
.paramStripeBox {
    
}
.buttonStripeBox {
    margin-top: 4px;
    display: flex;
}
.button {
    padding: 3px 5px;
}
.buttonStripeBox .button {
    font-size: 11px;
    font-weight: 300;
    margin-right: 4px;
}
.buttonStripeBox .button:first-child {
    padding-left: 15px;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
}
.buttonStripeBox .button:last-child {
    padding-right: 15px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
}
.paramName {
    margin-right: 2px;
}
.icon {
    vertical-align: center;
}
.activeMute {
    color: var(--negative-color);
}
.activeSolo {
    color: var(--positive-color);
}
</style>