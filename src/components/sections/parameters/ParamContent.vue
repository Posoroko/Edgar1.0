<template>
    <section class="paramSection">
        <div class="content width100 flex column">
            <div class="paramLine" v-for="(param, index) in parameterList" :key="index">
                <span class="paramLineOptionsBox">
                    <span class="icon paramLineIcon pointer"
                        @click="toggleMute(index, $event)" :data-mute="param.mute"
                        :class="{activeMute : parameterList[index].mute == true}">                        
                        cancel
                    </span>
                    <span class="icon paramLineIcon pointer" 
                        @click="toggleSolo(index, $event)" 
                        :data-state="param.solo"
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

const parameterList = ref(folderData.value.folders[selectedFolder.value].searches[selectedSearch.value].parameters[props.param])

const toggleMute = (index, e) => {
    parameterList.value[index].mute = !parameterList.value[index].mute
    e.target.setAttribute('data-mute', parameterList.value[index].mute)
    // e.target.classList.add('active')
    console.log(parameterList.value[index].mute)
}
const toggleSolo = (index, e) => {
    parameterList.value[index].solo = !parameterList.value[index].solo
    e.target.setAttribute('data-solo', parameterList.value[index].solo)
    // e.target.classList.add('active')
    console.log(parameterList.value[index].solo)
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