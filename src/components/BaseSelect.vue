<template>
  <div class="select">
    <select
      class="ak-form-select"
      :name="name"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <div class="select-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="10"
        viewBox="0 0 18 10"
        fill="none"
      >
        <path
          d="M8.99516 9.502C8.80335 9.502 8.61135 9.42869 8.46491 9.28225L0.964914 1.78225C0.671852 1.48919 0.671852 1.01463 0.964914 0.72175C1.25798 0.428875 1.73254 0.428688 2.02541 0.72175L8.99516 7.6915L15.9649 0.72175C16.258 0.428688 16.7325 0.428688 17.0254 0.72175C17.3183 1.01481 17.3185 1.48937 17.0254 1.78225L9.52541 9.28225C9.37898 9.42869 9.18698 9.502 8.99516 9.502Z"
          fill="#FFD28D"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: [String, Number],
  name: String,
  options: {
    type: Array,
    required: true,
  },
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
/* Add any specific styling for BaseSelect if needed, or ensure it inherits from global styles */
</style>