<template>
  <div>
    <div class="ak-height-150 ak-height-lg-60"></div>
    <div class="video-section" ref="imageContainer">
      <VideoModal :show="isOpen" @close="isOpen = false">
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/${videoId}`"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </VideoModal>
      <img
        :src="backgroundImage"
        alt="..."
        class="video-section-bg-img ak-bg"
        ref="imageZoomIn"
      />
      <button class="video-section-btn" @click="isOpen = true" aria-label="Play video">
        <span class="ak-player-btn ak-accent-color">
          <span></span>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import VideoModal from './VideoModal.vue';
import { useGsap, imageZoomInOut } from '../composables/useGsap';

defineProps({
  videoId: String,
});

const isOpen = ref(false);
const imageContainer = ref(null);
const imageZoomIn = ref(null);

const backgroundImage = "/assets/img/about/about-video-bg.webp";

const g = useGsap();

onMounted(() => {
  g.add(() => imageZoomInOut(imageContainer.value, imageZoomIn.value));
});
</script>
