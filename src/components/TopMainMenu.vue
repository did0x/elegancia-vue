<template>
  <div class="header-top">
    <div class="wrapper">
      <div class="header-logo">
        <router-link :to="Headerlogo?.link" class="logo">
          {{ Headerlogo?.title }}
        </router-link>
      </div>
      <div class="center-logo">
        <router-link to="/">
          <img :src="Headerlogo?.image" alt="..." />
        </router-link>
      </div>

      <div class="nav-toggles" @click="showTopnav">
        <span
          id="navBar"
          :class="`ak-munu_toggles-top ${showTopNavFullScreen}`"
        >
          <span></span>
        </span>
      </div>

      <ul :class="`top-main-menu ${showTopNavFullScreen}`">
        <li class="top-main-menu-li" v-for="(item, i) in sideNavigationItems" :key="i">
          <router-link :to="item.link">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const sideNavigationItems = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3001/sideNavigationItems');
    sideNavigationItems.value = await response.json();
  } catch (error) {
    console.error('Error fetching side navigation items:', error);
  }
});

const logo = "/assets/img/logo/logo.webp";

const Headerlogo = {
  title: "reservations",
  link: "/reservations",
  image: logo,
};

const showTopNavFullScreen = ref('');

const showTopnav = () => {
  let topAllList = gsap.utils.toArray(".top-main-menu-li");
  let i = 1;

  if (showTopNavFullScreen.value === '') {
    showTopNavFullScreen.value = 'active';
    gsap.set(".ak-main_header_right", {
      display: "none",
    });

    topAllList.forEach((item) => {
      gsap.fromTo(
        item,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          delay: i++ * 0.4,
          opacity: 1,
        }
      );
    });
  } else {
    gsap.set(".ak-main_header_right", {
      display: "block",
      delay: 0.5,
      duration: 1.5,
    });

    topAllList.forEach((item) => {
      gsap.set(item, {
        y: 0,
        opacity: 0,
      });
    });
    showTopNavFullScreen.value = '';
  }
};


</script>
