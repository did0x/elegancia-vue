<template>
  <div :class="btnClass">
    <button v-if="type === 'submit'" type="submit">
      <slot />
    </button>
    <router-link v-else-if="white" :to="to">
      <slot />
    </router-link>
    <div v-else class="text-btn1">
      <router-link :to="to">
        <slot />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  to: String,
  type: String,
  white: Boolean,
});

const btnClass = computed(() => {
  return {
    'text-btn': !props.white && !props.type,
    'ak-btn style-5': props.white || props.type === 'submit',
  };
});
</script>
