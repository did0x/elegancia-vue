<template>
  <section>
    <div class="ak-commmon-hero ak-style1 ak-bg">
      <img :src="backgroundImage" alt="..." class="commmon-hero-img" />
      <div class="ak-commmon-heading">
        <div class="ak-section-heading ak-style-1 ak-type-1 ak-color-1 page-top-title">
          <div class="ak-section-subtitle">
            <router-link :to="link">Home</router-link> / {{ title }}
          </div>
          <h2 class="ak-section-title page-title-anim" ref="titles">
            {{ title }}
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useGsap, commonTitleAnimation } from '../composables/useGsap';

defineProps({
  link: String,
  title: String,
});

const backgroundImage = "/assets/img/bg/banner-top-all.webp";
const titles = ref(null);

const g = useGsap();

onMounted(() => {
  g.add(() => commonTitleAnimation(titles.value));
});
</script>
