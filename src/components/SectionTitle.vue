<template>
  <div :class="sectionClass" ref="animTitleSection">
    <div v-if="subTitle" class="ak-section-subtitle">{{ subTitle }}</div>
    <h2 class="ak-section-title" ref="animTitle">
      <template v-if="textWhite">
        <span class="text-white">{{ textWhite }}</span> <br />
      </template>
      {{ title }}
    </h2>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useGsap } from '../composables/useGsap';
import SplitType from 'split-type';
import gsap from 'gsap';

const props = defineProps({
  title: String,
  subTitle: String,
  alignment: String,
  animTwo: Boolean,
  textWhite: String,
});

const animTitle = ref(null);
const animTitleSection = ref(null);

const sectionClass = computed(() => {
  return [
    'ak-section-heading',
    'ak-style-1',
    { 'ak-type-1': props.alignment === 'center' },
  ];
});

const g = useGsap();

onMounted(() => {
  const split = new SplitType(animTitle.value, { types: 'words, chars' });
  g.add(() => {
    gsap.from(split.chars, {
      duration: 0.8,
      y: 200,
      autoAlpha: 0,
      scale: 0.1,
      stagger: {
        from: "start",
        axis: "x",
        amount: 0.3,
        ease: 'Quint.easeOut',
      },
      scrollTrigger: {
          trigger: animTitle.value,
          start: "top 90%",
          end: "bottom 20%",
          scrub: false,
          markers: false,
        },
    });
  }, animTitleSection.value)
});
</script>
