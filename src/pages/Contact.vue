<template>
  <div>
    <CommonHero title="Contact Us" link="/" />
    <div class="ak-height-150 ak-height-lg-60"></div>
    <div class="container">
      <div class="contact-content">
        <div class="contact-form">
          <div class="contact-form-title ">
            <SectionTitle :animTwo="true" textWhite="Contact Us" />
          </div>
          <CommentContactForm />
        </div>
        <div class="contact-map">
          <GoogleMap addressLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.573633613359!2d111.90973917492255!3d-8.04117809198588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78fcd300df507b%3A0xde4ef342e7e8abda!2sToyota%20Auto%202000%20Tulungagung!5e1!3m2!1sen!2sid!4v1752146930563!5m2!1sen!2sid" />
        </div>
      </div>
    </div>
    <div class="ak-height-150 ak-height-lg-60"></div>
    <div class="container">
      <SectionTitle
        title="Nearby Find Us"
        subTitle="Visit us"
        alignment="center"
      />
      <div class="ak-height-65 ak-height-lg-30"></div>
      <LocationContainer />
    </div>
  </div>
</template>

<script setup>
import CommonHero from '../components/CommonHero.vue';
import LocationContainer from '../components/LocationContainer.vue';
import SectionTitle from '../components/SectionTitle.vue';
import GoogleMap from '../components/GoogleMap.vue';
import CommentContactForm from '../components/CommentContactForm.vue';
</script>