<template>
  <section class="ak-about-bg-color" ref="imageContainer">
    <div class="ak-height-150 ak-height-lg-60"></div>
    <div class="ak-about ak-style-1">
      <div class="ak-about-bg-img ak-bg">
        <img :src="backgroundImage" alt="..." ref="imageZoomIn"/>
      </div>
      <div class="ak-about-hr" ref="borderAbout"></div>
      <div class="container">
        <div class="about-section ak-about-1">
          <div class="about-text-section">
            <SectionTitle :title="title" :textWhite="styledTitlePart"/>

            <div class="ak-height-30 ak-height-lg-30"></div>
            <p class="about-subtext">{{ details }}</p>
            <div class="ak-height-30 ak-height-lg-30"></div>
            <p class="about-subtext">{{ subtext }}</p>
            <div class="ak-height-50 ak-height-lg-30"></div>
            <Button to="/about">Discover The Kitchen</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import SectionTitle from '../components/SectionTitle.vue';
import Button from '../components/Button.vue';
import {useGsap, imageZoomInOut, borderAnimation} from '../composables/useGsap';

const about_content = {
  title: "Royalty",
  styledTitlePart: "Exquisite Dining Experience Fit for",
  backgroundImage: "/assets/img/about/about-bg.webp",
  subtext:
      "Lorem to our restaurant, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that.",
  details:
      "Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that tantalizes your taste buds and leaves you with unforgettable memories.",
};

const {title, styledTitlePart, backgroundImage, subtext, details} = about_content;

const imageContainer = ref(null);
const imageZoomIn = ref(null);
const borderAbout = ref(null);

const gsap = useGsap();

onMounted(() => {
  gsap.add(() => imageZoomInOut(imageContainer.value, imageZoomIn.value));
  gsap.add(() => borderAnimation(borderAbout.value, 2, 13));
});
</script>
