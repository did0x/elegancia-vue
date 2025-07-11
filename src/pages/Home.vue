<template>
  <div>
    <HeroSliderTwo />
    <MovingText />
    <AboutContent />
    <OpeningHoursInfo />
    <PortfolioCarousel />
    <FoodMenu :styleTwo="false" />
    <BestItem />
    <Testimonial />
    <ReservationSection videoId="your-video-id" />
  </div>
</template>

<script setup>
import HeroSliderTwo from '../components/HeroSliderTwo.vue';
import MovingText from '../components/MovingText.vue';
import AboutContent from '../components/AboutContent.vue';
import OpeningHoursInfo from '../components/OpeningHoursInfo.vue';
import PortfolioCarousel from '../components/PortfolioCarousel.vue';
import FoodMenu from '../components/FoodMenu.vue';
import BestItem from '../components/BestItem.vue';
import Testimonial from '../components/Testimonial.vue';
import ReservationSection from '../components/ReservationSection.vue';
</script>
