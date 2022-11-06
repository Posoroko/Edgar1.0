import { ref } from 'vue'
import { displaySettings } from '@/edgar/displaySettings'

export const toggleParamDisplay = (param, property) => {
    displaySettings.value.parameters[param][property] = !displaySettings.value.parameters[param][property]
}