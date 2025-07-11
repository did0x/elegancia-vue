<template>
  <div>
    <CommonHero title="Reservation" link="/" />
    <div class="ak-height-150 ak-height-lg-60"></div>
    <div class="container-fluid">
      <div class="ak-booking-system-map-from">
        <div class="booking-system-map">
          <GoogleMap addressLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd" />
          <div class="booking-system-map-second">
            <div class="booking-system-heading">
              <SectionTitle
                title="Reservations"
                subTitle="Reservations"
                :animTwo="true"
              />
              <div class="ak-height-60 ak-height-lg-30"></div>
              <BookingSystem />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ak-height-150 ak-height-lg-60"></div>
    <SectionTitle
      title="Nearby Find Us"
      subTitle="Visit Us"
      alignment="center"
    />
    <div class="ak-height-65 ak-height-lg-30"></div>

    <LocationContainer />
  </div>
</template>

<script setup>
import LocationContainer from '../components/LocationContainer.vue';
import CommonHero from '../components/CommonHero.vue';
import SectionTitle from '../components/SectionTitle.vue';
import BookingSystem from '../components/BookingSystem.vue';
import GoogleMap from '../components/GoogleMap.vue';
</script>