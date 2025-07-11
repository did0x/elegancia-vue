<template>
  <div v-if="show" class="modal-overlay" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <slot></slot>
      <button class="close-button" @click="$emit('close')" aria-label="Close modal">&times;</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true
  }
});

defineEmits(['close']);
</script>

<style scoped>
.video-modal-overlay {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.video-modal-content {
  position: relative;
}

.video-modal-close-button {
  position: absolute;
  top: 10px; /* Adjusted for better positioning */
  right: 10px; /* Adjusted for better positioning */
  background: none;
  border: none;
  font-size: 4rem;
  color: white;
  cursor: pointer;
  line-height: 1;
}

/* Transition styles */
.video-modal-fade-enter-active,
.video-modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.video-modal-fade-enter-from,
.video-modal-fade-leave-to {
  opacity: 0;
}
</style>