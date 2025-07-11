<template>
  <div class="video-section">
    <VideoModal :show="isOpen" @close="isOpen = false">
      <div class="video-container">
        <iframe
            width="560"
            height="315"
            :src="`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
      </div>
    </VideoModal>

    <button class="video-section-btn" @click="isOpen = true">
      <span class="ak-player-btn ak-accent-color">
        <span></span>
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VideoModal from './VideoModal.vue';

defineProps({
  videoId: {
    type: String,
    required: true,
  }
});

const isOpen = ref(false);
</script>

<style scoped>
.video-container {
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform:  translate(-50%, -50%);
  padding-top: 56.25%;
  width: 85vw;
  max-width: 900px;
  background: black;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}


.video-section-btn {
  cursor: pointer;
}
</style>