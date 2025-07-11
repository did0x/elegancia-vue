<template>
  <div class="section-all-item-center">
    <img class="error-bg-img" :src="errorPagesbg" alt="errorBg" />
    <div class="border-comming-soon-colum-right drop-anim-gallery"></div>
    <div class="border-comming-soon-top"></div>
    <div class="container text-center">
      <h2 class="item-title-number">404</h2>
      <h2 class="item-title">Sorry! The Page isn't Found Here</h2>
      <p class="item-subtext">
        Fortunately, since it is mainly a client-side issue, it is relatively
        easy for website owners to fix the 404 error. This article will
        explain the possible causes of error 404 and show four effective
        methods to resolve it.Fortunately, since it is mainly a client-side
        issue, it is relatively easy for website owners to fix the 404 error.
      </p>
      <div class="mt-5">
        <Button :white="true" to="/"> Back to Home</Button>
      </div>
    </div>
    <div class="border-comming-soon-colum-left drop-anim-gallery"></div>
    <div class="border-comming-soon-bottom"></div>
  </div>
</template>

<script setup>
import Button from '../components/Button.vue';

const errorPagesbg = "/assets/img/bg/error-pages-bg.webp";
</script>
