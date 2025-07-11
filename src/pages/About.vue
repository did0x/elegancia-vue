<template>
  <div>
    <CommonHero title="About Us" link="/" />
    <AboutContent />
    <Testimonial />
    <OpeningHoursInfo :typeTwo="true" />
    <VideoPlayer videoId="UsD1MhKBmD4" />
  </div>
</template>

<script setup>
import CommonHero from '../components/CommonHero.vue';
import AboutContent from '../components/AboutContent.vue';
import Testimonial from '../components/Testimonial.vue';
import OpeningHoursInfo from '../components/OpeningHoursInfo.vue';
import VideoPlayer from '../components/VideoPlayer.vue';
</script>
