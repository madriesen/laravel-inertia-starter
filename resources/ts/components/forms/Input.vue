<template>
    <div :class="type === 'hidden' ? 'hidden' :  ''" class="py-6 border-0 leading-input relative w-full">
        <input
            @input="handleInput"
            :type="type" :id="id"
            :value="modelValue" :step="step" :required="required"/>
        <label :for="id">
            <span class="bg-white px-2">{{ text }}</span>
        </label>
    </div>

</template>

<script setup lang="ts">
const props = defineProps<{
    id: string;
    modelValue: string | number | Date;
    text?: string;
    type: string;
    step?: number;
    required?: boolean;
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string | number): void
}>()

const handleInput = (e) => {
    const value = props.type === 'number' ? parseFloat(e.target.value) : e.target.value;
    emit('update:modelValue', value)
}
</script>

<style lang="css" scoped>

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}

input {
    @apply block w-full px-4 py-2 bg-white border border-gray-200 rounded-md shadow-sm;
}


input:focus {
    @apply outline-none border-gray-500;
}

input:focus ~ label {
    color: #11ACA3 !important;
}

input:focus ~ label {
    padding: 0 !important;
    font-size: 14px;
    top: -15px;
}

input:invalid {
    outline: 0;
}

input:valid ~ label {
    color: black;
}

label {
    @apply inline-block absolute top-0 left-input cursor-text transition duration-700 ease-in-out;
    /*@apply block text-gray-700 text-sm font-bold mb-2;*/
    transition: all 200ms ease-in-out;
}

</style>
