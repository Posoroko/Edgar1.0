<template>
<div class="parameterBox">
    <div class="topSection">menu
        <div class="cardTop"></div>
    </div>

    <div class="sitesParameters" v-for="parameter in parameters" :key="parameter">
        <div class='paramCard'>
            <div class="titleContainer">
                <span class="paramText">{{parameter}}</span>
                <span class="icon paramIcon">
                    <span class="icon" :data-param="parameter" @click="closeParameter" v-if="paramExpandedState[parameter] == true">expand_less</span>
                    <span class="icon" :data-param="parameter" @click="expandParameter" v-if="paramExpandedState[parameter] == false">expand_more</span>
                </span>
            </div>
            <div class="paramContent" v-if="paramExpandedState[parameter] == true">
                hello
            </div>
            <div class="cardTop"></div>
        </div>
    </div>


 

</div>
</template>

<script setup>
import { ref } from 'vue'

const parameters = ref(['sites', 'words', 'languages', 'dates'])

const paramExpandedState = ref({
    sites: false,
    words: false,
    languages: false,
    dates: false
})

const expandParameter = (e) => {
    const param = e.target.getAttribute('data-param')
    paramExpandedState.value[param] = true
}

const closeParameter = (e) => {
    const param = e.target.getAttribute('data-param')
    paramExpandedState.value[param] = false
}


</script>

<style scoped>

.parameterBox {
    width: 100%;
    height: 100%;
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
</style>