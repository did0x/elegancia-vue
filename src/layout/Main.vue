<template>
  <div>
    <Header />
    <router-view />
    <Footer v-if="!hideFooter" />
    <ScrollUp />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from './Header.vue';
import Footer from './Footer.vue';
import ScrollUp from '../components/ScrollUp.vue';

const route = useRoute();

const hideFooter = computed(() => {
  return route.path === '/error-pages' || route.path === '/comming-soon';
});
</script>