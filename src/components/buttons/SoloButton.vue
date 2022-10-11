<template>
    <div class="soloButtonBox width100 centered solidFrame">

        <div class="button soloBtn" @click="props.properties.click">
            {{props.properties.text}}
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    properties: Object,
})

</script>

<style scoped>
.soloBtn {
    border-radius: 50px;
}



</style>