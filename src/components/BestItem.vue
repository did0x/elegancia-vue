<template>
  <section>
    <div class="ak-height-150 ak-height-lg-60"></div>
    <div class="container">
      <div class="ak-best-item">
        <div class="best-item-section-1">
          <SectionTitle :title="title" :textWhite="'Our'"/>
          <div class="ak-height-30 ak-height-lg-30"></div>
          <p>{{ details }}</p>
          <div class="ak-height-50 ak-height-lg-30"></div>
          <div class="img-one">
            <ImageOverlay :image="secondImage"/>
          </div>
        </div>
        <div class="best-item-section-2" data-speed="1.1" data-lag="1">
          <img src="/assets/img/icon/star-line.svg" alt="..."/>
        </div>
        <div class="best-item-section-3">
          <div class="img-two">
            <ImageOverlay :image="firstImage"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue';
import ImageOverlay from './ImageOverlay.vue';

const bestItem = {
  title: "Specialties",
  styledTitlePart: "Our",
  firstImage: "/assets/img/bestItem/best-item-1.jpg",
  secondImage: "/assets/img/bestItem/best-item-2.webp",
  details:
      " Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that tantalizes your taste buds.",
};

const {firstImage, secondImage, details, title} = bestItem;
</script>
