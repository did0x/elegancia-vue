<template>
  <header ref="headerRef" :class="navClass">
    <TopMainMenu />
    <div class="nav-bar-border"></div>
    <NavMenu />
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import NavMenu from '../components/NavMenu.vue';
import TopMainMenu from '../components/TopMainMenu.vue';

const lastScrollTop = ref(0);
const isSticky = ref(false);
const isHeaderVisible = ref(false);
const headerRef = ref(null);

const handleScroll = () => {
  const header = headerRef.value;
  if (!header) return;

  const headerHeight = header.offsetHeight + 30;
  const windowTop = window.pageYOffset || document.documentElement.scrollTop;

  if (windowTop >= headerHeight) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
    isHeaderVisible.value = false;
  }

  if (isSticky.value) {
    if (windowTop < lastScrollTop.value) {
      isHeaderVisible.value = true;
    } else {
      isHeaderVisible.value = false;
    }
  }

  lastScrollTop.value = windowTop;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const navClass = computed(() => [
  "ak-sticky_header",
  "ak-site_header_full_width",
  "ak-site_header",
  "ak-style1",
  {
    "ak-gescout_sticky": isSticky.value,
    "ak-gescout_show": isHeaderVisible.value,
  },
]);
</script>
