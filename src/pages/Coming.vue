<template>
  <div class="section-all-item-center">
    <img class="error-bg-img" :src="comingSoonBg" alt="errorBg" />
    <div class="border-comming-soon-colum-right drop-anim-gallery"></div>
    <div class="border-comming-soon-top"></div>
    <h2 class="item-title">Coming Soon</h2>
    <div class="container">
      <div class="date-section" id="commingsoon">
        <template v-if="timeLeft.expired">
          <span>Time's up!</span>
        </template>
        <template v-else>
          <div class="timmer" v-for="([interval, value]) in Object.entries(timeLeft)" :key="interval">
            <h1 class="number ak-stroke-text">{{ value }}</h1>
            <p class="text">{{ interval }}</p>
          </div>
        </template>
      </div>
    </div>
    <div class="border-comming-soon-colum-left drop-anim-gallery"></div>
    <div class="border-comming-soon-bottom"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const comingSoonBg = "/assets/img/bg/coming-soon-pages-bg.webp";

const calculateTimeLeft = () => {
  const difference = +new Date("2025-08-08") - +new Date();
  if (difference <= 0) {
    return { expired: true };
  }
  return {
    months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
    days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const timeLeft = ref(calculateTimeLeft());
let timer = null;

onMounted(() => {
  timer = setInterval(() => {
    timeLeft.value = calculateTimeLeft();
  }, 1000);
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>
