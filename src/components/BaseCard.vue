<template>
  <div class="ak-card ak-style-1">
    <div class="ak-card-img">
      <img :src="image" alt="..." />
    </div>
    <div class="card-info">
      <div class="card-text style-1">
        <h5 class="card-title">{{ title }}</h5>
        <div class="card-subtitle">{{ subTitle }}</div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  subTitle: String,
});
</script>

<style scoped>
/* Add any specific styling for BaseCard if needed, or ensure it inherits from global styles */
</style>