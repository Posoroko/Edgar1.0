<template>
    <div class="buttonStripeBox wireFrame">
        <div class="button solidFrame" v-for="(button, index) in props.buttons" :key="`button${index}`">
            {{button.text}}
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'


const props = defineProps({
    properties: Object,
    buttons: Array,
    selector: Boolean,
    style: String
})

onMounted(() => {
    console.log(props.selector)

})

</script>

<style scoped>

</style>