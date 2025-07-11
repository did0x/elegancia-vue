<template>
  <div>
    <div class="ak-height-150 ak-height-lg-60"></div>
    <div :class="containerClass">
      <div :class="openingHourClass">
        <div :class="openingHourImgClass">
          <ImageOverlay :image="image" :imagesZoom="true" />
        </div>
        <div :class="openingHourTextClass">
          <SectionTitle :title="title" :animTwo="true" />
          <div class="ak-height-30 ak-height-lg-30"></div>
          <p class="opening-hour-subtext">{{ subtext }}</p>
          <template v-if="openingHoursWeekday && openingHoursWeekend">
            <div class="ak-height-30 ak-height-lg-30"></div>
            <div class="opening-hour-date">
              <p>{{ openingHoursWeekday }}</p>
              <div class="opening-hour-hr"></div>
              <p> {{ openingHoursWeekend }}</p>
            </div>
          </template>

          <div class="ak-height-70 ak-height-lg-30"></div>
          <Button to="/reservations">Reservation</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import SectionTitle from './SectionTitle.vue';
import ImageOverlay from './ImageOverlay.vue';
import Button from './Button.vue';

const props = defineProps({
  typeTwo: Boolean,
});

const openingInfo = {
  title: "Opening Hours",
  image: "/assets/img/about/about-open-hour.webp",
  subtext:
    "Lorem to our restaurant, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that.",
  openingHoursWeekday: "SUNDAY - THURSDAY: 11:30AM - 11PM",
  openingHoursWeekend: "FRIDAY & SATURDAY: 11:30AM - 12AM",
};

const { title, image, subtext, openingHoursWeekday, openingHoursWeekend } = openingInfo;

const containerClass = computed(() => ({
  container: props.typeTwo,
  'ak-bg-secendary': !props.typeTwo,
}));

const openingHourClass = computed(() => ({
  'opening-hour': true,
  'type-2': props.typeTwo,
}));

const openingHourImgClass = computed(() => ({
  'opening-hour-img-section': true,
  'style-2': props.typeTwo,
}));

const openingHourTextClass = computed(() => ({
  'opening-hour-text-section': true,
  'type-2': props.typeTwo,
}));
</script>
