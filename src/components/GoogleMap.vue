<template>
  <div class="booking-system-map-frist">
    <div class="ak-google-map ak-bg">
      <template v-if="addressLink">
        <iframe :src="addressLink" allowfullscreen title="Google Map Location"></iframe>
      </template>
      <template v-else>
        <p class="error-message">Map address not available.</p>
      </template>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  addressLink: String,
});

const { addressLink } = props;
</script>
