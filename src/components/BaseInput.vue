<template>
  <div class="ak-form-field">
    <input
      v-if="type !== 'textarea' && type !== 'select'"
      :type="type"
      :class="inputClass"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="required"
    />
    <textarea
      v-else-if="type === 'textarea'"
      :class="inputClass"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>
</template>

<script setup>
defineProps({
  modelValue: [String, Number],
  placeholder: String,
  type: { type: String, default: 'text' },
  required: { type: Boolean, default: false },
  inputClass: { type: String, default: 'ak-form-input' },
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
/* Add any specific styling for BaseInput if needed, or ensure it inherits from global styles */
</style>