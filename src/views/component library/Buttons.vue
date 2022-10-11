<template>
    <section class="soloButtonContainer marginTop20">
        <p class="text centered">solidFrame soloBtn</p>
        <div class="box marginTop20">
            <SoloButton :properties=soloButtonProperties />
        </div>
    </section>

    <section class="marginTop20">
        <p class="text centered">
            buttonStripe
        </p>
        <div class="box marginTop20">
            <ButtonStripe :buttons=buttons />
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import SoloButton from '@/components/buttons/SoloButton.vue'
import ButtonStripe from '@/components/buttons/ButtonStripe.vue'

const soloButtonProperties = ref({
    text: "Submit",
    style: "solidFrame",
    click: () => {
        console.log('hello guys!')
    }
})



const buttons = ref([
    {
        text: "foo",
    },
    {
        text: "bar"
    },
    {
        text: "baz"
    }
])

const buttonStripeProperties = ref ({
    buttons: buttons.value,
    selector: false,
    
})

</script>

<style scoped>


</style>