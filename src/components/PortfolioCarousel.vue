<template>
  <section>
    <div class="ak-height-150 ak-height-lg-60"></div>
    <div class="container-fluid">
      <SectionTitle
          title="Food Items"
          subTitle="Food Showcase"
          alignment="center"
      />
      <div class="ak-height-65 ak-height-lg-30"></div>
      <div class="ak-slider ak-slider-2">
        <swiper
            :loop="true"
            :slidesPerView="'auto'"
            :centeredSlides="true"
            :modules="[Pagination]"
            :pagination="{ clickable: true, el: '.ak-pagination-2' }"
            @swiper="onSwiper"
        >
          <swiper-slide v-for="(item, index) in portfolioList" :key="index">
            <div class="col">
              <div class="ak-card ak-style-1">
                <div class="ak-card-img">
                  <img :src="item.image" alt="..."/>
                </div>
                <div class="card-info">
                  <div class="card-text style-1">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <div class="card-subtitle">{{ item.subTitle }}</div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="container">
        <div class="ak-next-prev-2">
          <div class="ak-next-prev-2 ak-style-1">
            <div class="ak-swiper-button-prev-2">
              <button
                  class="btn-style-2 btn-size btn-style-round button-prev-next-2 rotate-svg"
                  aria-disabled="false"
                  @click="slideNext"
              >
                <svg
                    width="20"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="#fff" fill="none" fill-rule="evenodd">
                    <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4"></path>
                  </g>
                </svg>
                <svg
                    width="20"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="#fff" fill="none" fill-rule="evenodd">
                    <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4"></path>
                  </g>
                </svg>
              </button>
            </div>
            <div class="ak-pagination-2 ak-style1"></div>
            <div class="ak-swiper-button-next-2">
              <button
                  class="btn-style-2 btn-size btn-style-round button-prev-next-2"
                  aria-disabled="false"
                  @click="slidePrev"
              >
                <svg
                    width="20"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="#fff" fill="none" fill-rule="evenodd">
                    <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4"></path>
                  </g>
                </svg>
                <svg
                    width="20"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="#fff" fill="none" fill-rule="evenodd">
                    <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from './SectionTitle.vue';

const portfolioList = ref([]);
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

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3001/portfolioItems');
    portfolioList.value = await response.json();
  } catch (error) {
    console.error('Error fetching portfolio list:', error);
  }
});
</script>
