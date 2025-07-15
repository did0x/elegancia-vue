<template>
  <div class="ak-menu-list-section-1" ref="menuListSection">
    <img :src="data.image" alt="..." />
    <div class="food-menu style-1">
      <div class="food-menu-section-1">
        <div class="food-menu-title">
          <p>{{ data.title }}</p>
        </div>
        <div class="food-menu-hr">
          <div class="food-menu-hr style-1" ref="border"></div>
          <div class="food-menu-hr style-1" ref="borderTwo"></div>
        </div>
        <div class="food-menu-price">
          <p>{{ data.price }}</p>
        </div>
      </div>
      <div class="food-menu-section-2">
        <div class="food-menu-subsitle">
          <p>{{ data.subTitle }}</p>
        </div>
        <div class="food-menu-price-subsitle">
          <p>{{ data.offer }}</p>
        </div>
      </div>
      <div class="menu-item-actions">
        <button @click="$emit('edit', data)" class="ak-btn style-5 color-yellow-bg">Edit</button>
        <button @click="$emit('delete', data.id)" class="ak-btn style-5">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from 'vue';
import { useGsap, foodMenuHr, overImageShows } from '../composables/useGsap';

defineProps({
  data: Object,
});

defineEmits(['edit', 'delete']);

const menuListSection = ref(null);
const border = ref(null);
const borderTwo = ref(null);

const g = useGsap();

onMounted(() => {
  g.add(() => overImageShows(menuListSection.value));
  g.add(() => foodMenuHr(border.value));
  g.add(() => foodMenuHr(borderTwo.value));
});
</script>
