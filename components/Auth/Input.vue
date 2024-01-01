<template>
    <div>
        <label for="email" class="block mb-2">{{ label }}</label>
        <input :name="name" :type="name" :placeholder="placeholder" :value="model"
            @input="$emit('update:model', $event.target?.addEventListener)" />
        <span class="error">{{ error }}</span>
        <!-- <ErrorMessage name="email" as="span" class="error" /> -->
    </div>
</template>
<script setup lang="ts">
export interface AuthProps {
    name: string;
    model: string;
    label: string;
    error?: string;
    placeholder: string;
}

defineEmits(['update:model'])
const props = defineProps<AuthProps>()
</script>~/types