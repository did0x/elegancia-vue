<template>
  <div>
    <div class="ak-booking-system" ref="imageContainer">
      <img
        class="ak-booking-system-bg-img ak-bg"
        :src="backgroundImage"
        alt="..."
        ref="imageZoomIn"
      />
      <div class="container">
        <div class="row justify-content-center align-content-center align-items-center">
          <div class="col-md-6 col-12">
            <VideoButton :videoId="videoId" />
          </div>
          <div class="col-md-6 col-12">
            <SectionTitle
              title="Reservations"
              subTitle="Reservations"
              :animTwo="true"
            />
            <div class="ak-height-60 ak-height-lg-30"></div>
            <BookingSystem :styleTwo="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import VideoButton from './VideoButton.vue';
import SectionTitle from './SectionTitle.vue';
import BookingSystem from './BookingSystem.vue';
import { useGsap, imageZoomInOut } from '../composables/useGsap';

defineProps({
  videoId: String,
});

const backgroundImage = "/assets/img/bg/booking-system-bg.webp";

const imageContainer = ref(null);
const imageZoomIn = ref(null);

const g = useGsap();

onMounted(() => {
  g.add(() => imageZoomInOut(imageContainer.value, imageZoomIn.value));
});
</script>