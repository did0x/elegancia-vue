<template>
  <footer>
    <div class="ak-height-150 ak-height-lg-150"></div>
    <div class="ak-footer ak-style-1">
      <img class="ak-bg footer-bg-img" :src="footerBg"/>
      <div class="container ak-hr-container" ref="footerContainer">
        <div class="ak-braner-logo type-color-1 footer-logo">
          <div
              class="footer-log-elem"
              ref="scrollUp"
              @click="scrollUpBtn()"
          >
            <div class="footer-log-icon">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="13"
                  viewBox="0 0 30 13"
                  fill="none"
              >
                <path
                    d="M28.991 12.2063L14.8322 1L0.67334 12.2063"
                    stroke="white"
                    stroke-linecap="round"
                />
              </svg>
            </div>
            <img :src="elegenciaLogo" alt="..."/>
          </div>
        </div>
        <div class="ak-height-100 ak-height-lg-60"></div>
        <div class="ak-footer-hr-top" ref="footerHrTop"></div>

        <div class="footer-main">
          <div class="footer-eamil-menu">
            <div class="footer-email">
              <a href="mailto:info@example.com">{{ footerText.email }}</a>
            </div>
            <div class="footer-menu">
              <ul>
                <li v-for="item in footerNav" :key="item.key">
                  <router-link :to="item.link">{{ item.title }}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="ak-height-75 ak-height-lg-5"></div>
          <div class="footer-info">
            <div class="fooer-phn">
              <a :href="`tel:${footerText.phoneOne}`">{{ footerText.phoneOne }}</a>
              <br/>
              <a :href="`tel:${footerText.phoneTwo}`">{{ footerText.phoneTwo }}</a>
            </div>
            <div class="footer-address">
              <a
                  href="https://maps.app.goo.gl/gAd1JdfRW5d6eHkn7"
                  target="_blank"
              >
                {{ footerText.addressOne }}
                <br/>
                {{ footerText.addressTwo }}
              </a>
            </div>
            <div class="footer-time">
              <p>{{ footerText.timeOne }}</p>
              <div
                  class="footer-time-border my-1"
                  ref="footerTimeBorder"
              ></div>
              <p>{{ footerText.timeTwo }}</p>
            </div>
            <div class="footer-btn">
              <Button :white="true" to="/reservations">Reservations</Button>
            </div>
          </div>
        </div>

        <div
            class="ak-footer-hr-bottom qodef-grid-item"
            ref="footerHrBottom"
        ></div>
        <div class="ak-height-130 ak-height-lg-30"></div>

        <div class="copy-right-section">
          <p class="text-uppercase text-md-center text-white">
            {{ footerText.copyright }}
          </p>
        </div>

        <div class="ak-height-45 ak-height-lg-30"></div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {useGsap, footerAnimation, scrollButton, scrollUpShow} from '../composables/useGsap';
import Button from '../components/Button.vue';

const footerBg = "/assets/img/bg/footer-bg.png";
const elegenciaLogo = "/assets/img/logo/elegencia.webp";

const footerText = {
  email: "info@elegancia.com",
  phoneOne: "1-800-915-6271",
  phoneTwo: "1-800-915-6271",
  addressOne: "2726 Av. Papineau Montreal",
  addressTwo: " H2K 4J6, Canada",
  timeOne: "SUNDAY - THURSDAY: 11:30AM - 11PM",
  timeTwo: "FRIDAY & SATURDAY: 11:30AM - 12AM",
  copyright: "Copyright 2025 All Right Reserved",
};

const footerNav = [
  {
    title: "Home",
    link: "/",
    key: "home",
  },
  {
    title: "About",
    link: "/about",
    key: "about",
  },
  {
    title: "Menu",
    link: "/menu",
    key: "menu",
  },
  {
    title: "Contact",
    link: "/contact",
    key: "contact",
  },
];

const scrollUp = ref(null);
const footerContainer = ref(null);
const footerHrTop = ref(null);
const footerHrBottom = ref(null);
const footerTimeBorder = ref(null);

const g = useGsap();

onMounted(() => {
  g.add(() =>
      footerAnimation(
          footerContainer.value,
          footerHrTop.value,
          footerHrBottom.value,
          footerTimeBorder.value
      )
  );
  g.add(() => scrollUpShow(scrollUp.value));
});

const scrollUpBtn = () => {
  g.add(() => scrollButton());
};
</script>
