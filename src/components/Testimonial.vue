<template>
  <section class="container">
    <div class="ak-height-150 ak-height-lg-60"></div>
    <div class="ak-slider ak-slider-3">
      <swiper
        :loop="true"
        :slidesPerView="'auto'"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(item, index) in testimonialInfo" :key="index">
          <div class="container">
            <div class="testimonial-section">
              <div class="testimonial-icon-1">
                <img
                  src="/assets/img/icon/testimonial-icon-l.svg"
                  alt="..."
                />
              </div>
              <div class="testimonial-info-section">
                <div class="testimonial-info">
                  <img
                    :src="item.image"
                    class="testimonial-info-img"
                    alt="..."
                  />
                  <h6 class="testimonial-info-title">{{ item.title }}</h6>
                  <p class="short-title">{{ item.subTitle }}</p>
                  <p class="testimonial-info-subtitle">
                    {{ item.content }}
                  </p>
                </div>
              </div>
              <div class="testimonial-icon-1">
                <img
                  src="/assets/img/icon/testimonial-icon-r.svg"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="ak-swiper-controll-3">
      <div class="ak-swiper-navigation-wrap">
        <div class="ak-swiper-button-prev-3">
          <button
            class="btn-style-2 btn-size btn-style-round button-prev-next-2 rotate-svg"
            aria-disabled="false"
            @click="slideNext"
          >
            <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#fff" fill="none" fill-rule="evenodd">
                <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4"></path>
              </g>
            </svg>
            <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#fff" fill="none" fill-rule="evenodd">
                <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4"></path>
              </g>
            </svg>
          </button>
        </div>
        <div class="ak-swiper-button-next-3">
          <button
            class="btn-style-2 btn-size btn-style-round button-prev-next-2"
            aria-disabled="false"
            @click="slidePrev"
          >
            <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#fff" fill="none" fill-rule="evenodd">
                <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4"></path>
              </g>
            </svg>
            <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#fff" fill="none" fill-rule="evenodd">
                <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const testimonialInfo = [
  {
    image: "/assets/img/testimonial/testimonial-1.jpg",
    title: "Steven K. Roberts",
    subTitle: "From USA",
    content:
      "“Their talented team of passionate chefs masterfully crafts each dish, combining the finest ingredients with innovative techniques to present culinary creations that are as visually stunning as they are delicious.”",
  },
  {
    image: "/assets/img/testimonial/testimonial-2.jpg",
    title: "K. Roberts",
    subTitle: "From ",
    content:
      "“Their talented team of passionate chefs masterfully crafts each dish, combining the finest ingredients with innovative techniques to present culinary creations that are as visually stunning as they are delicious.”",
  },
  {
    image: "/assets/img/testimonial/testimonial-3.webp",
    title: "Jon K. Sun",
    subTitle: "From ",
    content:
      "“Their talented team of passionate chefs masterfully crafts each dish, combining the finest ingredients with innovative techniques to present culinary creations that are as visually stunning as they are delicious.”",
  },
];

const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const slideNext = () => {
  swiperInstance.value.slidePrev();
};

const slidePrev = () => {
  swiperInstance.value.slideNext();
};
</script>
