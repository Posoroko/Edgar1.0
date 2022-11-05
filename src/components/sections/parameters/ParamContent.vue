<template>
    <section class="paramSection">
        <div class="content width100 flex column">
            <div class="paramLine" v-for="(param, index) in parameterList" :key="index">
                <span class="paramLineOptionsBox">
                    <span class="icon paramLineIcon pointer"
                        @click="toggleMute(index, $event)"
                        :class="{activeMute : parameterList[index].mute == true}">                        
                        cancel
                    </span>
                    <span class="icon paramLineIcon pointer" 
                        @click="toggleSolo(index, $event)" 
                        :class="{activeSolo : parameterList[index].solo == true}">
                        check_box
                    </span>
                </span>

                <span class="paramText">{{param.name}}</span>
            </div>
            
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { folderData, liveParameters, selectedFolder, selectedSearch } from '@/edgar/explorer'


const props = defineProps({
    param: String
});

const parameterList = ref(liveParameters.value[props.param])

const toggleMute = (index, e) => {
    liveParameters.value[props.param][index].mute = !liveParameters.value[props.param][index].mute
}
const toggleSolo = (index, e) => {
    liveParameters.value[props.param][index].solo = !liveParameters.value[props.param][index].solo
}


</script>

<style scoped>

.paramSection  {
    padding: 0 10px 10px 10px;
}

.paramLine {
    padding-bottom: 3px;
    display: flex;
    align-items: center;
}
.paramLineOptionsBox {
    margin-right: 7px;
    display: flex;
    align-items: center;
}
.paramLineIcon {
    font-size: 14px;
    margin-right: 3px;
    color: var(--secondary-color-faded);
}
.paramText {
    font-size: 16px;
    color: var(--secondary-color);
}
.activeMute {
    color: var(--negative-color);
}
.activeSolo {
    color: var(--positive-color);
}



</style>