<template>
  <section>
    <div class="ak-hero ak-style1">
      <img class="ak-hero-bg ak-bg" src="/assets/img/bg/hero-bg-1.webp" alt="..." />
      <div class="hero-text-section container-fluid">
        <div class="ak-slider ak-slider-hero-2">
          <swiper
            :loop="true"
            :slidesPerView="'auto'"
            @swiper="onSwiper"
          >
            <swiper-slide v-for="(item, index) in sliderData" :key="index">
              <div class="slider-info">
                <div class="hero-title">
                  <h1 class="hero-main-title">{{ item.title }}</h1>
                  <h1 class="hero-main-title-1">{{ item.mainTitle }}</h1>
                </div>

                <div class="ak-height-30 ak-height-lg-30"></div>
                <div>
                  <p class="hero-sub-text">{{ item.description }}</p>
                </div>
                <div class="ak-height-70 ak-height-lg-30"></div>
                <router-link :to="item.buttonUrl" class="hero-btn style-1">
                  <div class="ak-btn style-5 color-yellow-bg">
                    View More
                  </div>
                </router-link>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="container">
        <div class="ak-swiper-controll-hero-2">
          <div class="ak-swiper-navigation-wrap">
            <div
              class="ak-swiper-button-prev"
              @click="slideNext"
            >
              <div class="hero-swiper-prev">
                <div class="btn-cricle"></div>
                <div class="btn-arrow">
                  <svg
                    width="40"
                    height="55"
                    viewBox="0 0 54 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1166_8458)">
                      <path
                        d="M16.6309 25.4001L25.1406 16.8902C25.4463 16.5333 25.9835 16.4917 26.3405 16.7974C26.6974 17.1031 26.739 17.6403 26.4333 17.9973C26.4048 18.0306 26.3738 18.0617 26.3405 18.0901L19.2859 25.1532H52.9762C53.4461 25.1532 53.8271 25.5343 53.8271 26.0043C53.8271 26.4743 53.4461 26.8552 52.9762 26.8552H19.2859L26.3405 33.9098C26.6974 34.2155 26.739 34.7527 26.4333 35.1097C26.1275 35.4666 25.5904 35.5082 25.2334 35.2025C25.2001 35.174 25.1691 35.1429 25.1406 35.1097L16.6308 26.5999C16.3009 26.2681 16.3009 25.732 16.6309 25.4001Z"
                        fill="#FFD28D"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div class="ak-swiper-button-next">
              <div
                class="hero-swiper-next"
                @click="slidePrev"
              >
                <div class="btn-cricle"></div>
                <div class="btn-arrow">
                  <svg
                    width="40"
                    height="55"
                    viewBox="0 0 55 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1166_8452)">
                      <path
                        d="M38.0234 25.4001L29.5137 16.8902C29.208 16.5333 28.6708 16.4917 28.3138 16.7974C27.9569 17.1031 27.9153 17.6403 28.221 17.9973C28.2495 18.0306 28.2805 18.0617 28.3138 18.0901L35.3684 25.1532H1.6781C1.20816 25.1532 0.827148 25.5343 0.827148 26.0043C0.827148 26.4743 1.20816 26.8552 1.6781 26.8552H35.3684L28.3138 33.9098C27.9569 34.2155 27.9153 34.7527 28.221 35.1097C28.5268 35.4666 29.0639 35.5082 29.4209 35.2025C29.4542 35.174 29.4852 35.1429 29.5137 35.1097L38.0235 26.5999C38.3534 26.2681 38.3534 25.732 38.0234 25.4001Z"
                        fill="#FFD28D"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const sliderData = [
  {
    title: "Explore Our Menu",
    mainTitle: "Delicious Dishes",
    description: "Browse our menu to discover a variety of mouthwatering options, crafted with the freshest ingredients for every taste.",
    buttonUrl: "/menu",
  },
  {
    title: "Learn About Us",
    mainTitle: "Our Story & Values",
    description: "Find out what makes us unique, our journey, and the passion that drives our team to serve you the best experience.",
    buttonUrl: "/about",
  },
  {
    title: "Book a Table",
    mainTitle: "Reserve Your Spot",
    description: "Secure your reservation for an unforgettable dining experience. Quick and easy booking for any occasion.",
    buttonUrl: "/reservations",
  },
];

const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const slideNext = () => {
  swiperInstance.value.slideNext();
};

const slidePrev = () => {
  swiperInstance.value.slidePrev();
};
</script>
