<template>
    <div class="py-6 border-0 leading-input relative w-full">
        <select :id="id"
                :value="modelValue" :required="required"
                @input="handleInput">
            <option value="NULL">--select item--</option>
            <option v-for="item in items" :key="item.id" :value="item.id">
                {{ item.name }}
            </option>
        </select>
        <label :for="id">
            <span class="bg-white px-2">{{ text }}</span>
        </label>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    id: string;
    modelValue: string | number;
    text: string;
    items: any[];
    selectedItem?: any;
    required?: boolean;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string | number): void
}>()

const handleInput = (e) => {
    const value = e.target.value;
    emit('update:modelValue', value)
}
</script>

<style lang="css" scoped>

select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus,
select:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}

select {
    @apply block w-full px-4 py-2 bg-white border border-gray-200 rounded-md shadow-sm;
}


select:focus {
    @apply outline-none border-gray-500;
}

select:focus ~ label {
    color: #11ACA3 !important;
}

select:focus ~ label {
    padding: 0 !important;
    font-size: 14px;
    top: -15px;
}

select:invalid {
    outline: 0;
}

select:valid ~ label {
    color: black;
}

label {
    @apply inline-block absolute top-0 left-input cursor-text transition duration-700 ease-in-out;
    /*@apply block text-gray-700 text-sm font-bold mb-2;*/
    transition: all 200ms ease-in-out;
}

</style>
