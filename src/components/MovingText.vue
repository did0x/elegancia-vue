<template>
  <div class="ak-moving-section-wrap ak-normal text-uppercase">
    <div class="ak-moving-section-in">
      <div v-for="(text, i) in movingText" :key="i" class="ak-moving-section">
        <h2>
          {{ text.white }} <span>{{ text.yellow }} &nbsp;</span>
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
const movingText = [
  {
    white: "Embark on a gastronomic adventure ",
    yellow: "guided our by exquisite dishes ",
  },
  {
    white: "Embark on a gastronomic adventure ",
    yellow: "guided our by exquisite dishes ",
  },
];
</script>
