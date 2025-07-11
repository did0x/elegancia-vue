<template>
  <div class="ak-main_header">
    <div class="ak-nav-container">
      <div class="ak-main_header_in">
        <div class="ak-main_header_left">
          <router-link class="ak-site_branding" to="/">
            <img :src="logo" alt="..." />
          </router-link>
        </div>
        <div class="ak-main_header_right">
          <div class="ak-nav ak-medium">
            <ul id="ak-nav_list" :class="`ak-nav_list ${navlist}`">
              <MenuItem v-for="(item, i) in navigationItems" :key="i" :props="item" />
            </ul>
            <span
              @click="navBarShow()"
              id="navBar"
              :class="`ak-munu_toggle ${navBar}`"
            >
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MenuItem from './MenuItem.vue';
import { useApi } from '../composables/useApi';

const logo = "/assets/img/logo/logo.webp";
const navigationItems = ref([]);

const navBar = ref('');
const navlist = ref('');

const navBarShow = () => {
  if (navBar.value === '') {
    navBar.value = 'ak-toggle_active';
  } else {
    navBar.value = '';
  }

  if (navlist.value === '') {
    navlist.value = 'ak-show-moblie-nav-list';
  } else {
    navlist.value = '';
  }
};

const { data, error, loading, fetchData } = useApi();

onMounted(async () => {
  await fetchData('navigationItems');
  if (data.value) {
    navigationItems.value = data.value;
  } else if (error.value) {
    console.error('Error fetching navigation items:', error.value);
  }
});
</script>
