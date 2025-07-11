<template>
  <span class="ak-scrollup" ref="scrollUp" @click="scrollUpBtn">
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 10L1.7625 11.7625L8.75 4.7875V20H11.25V4.7875L18.225 11.775L20 10L10 0L0 10Z"
        fill="currentColor"
      />
    </svg>
  </span>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useGsap, scrollButton, scrollUpShow } from '../composables/useGsap';

const scrollUp = ref(null);

const g = useGsap();

onMounted(() => {
  g.add(() => scrollUpShow(scrollUp.value));
});

const scrollUpBtn = () => {
  g.add(() => scrollButton());
};
</script>
