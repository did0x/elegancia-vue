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
          <p>{{ data.priceSubTitle }}</p>
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

<style scoped>
.menu-item-actions {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}

.menu-item-edit-button, .menu-item-delete-button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: white;
}

.menu-item-edit-button {
  background-color: #007bff;
}

.menu-item-edit-button:hover {
  background-color: #0056b3;
}

.menu-item-delete-button {
  background-color: #dc3545;
}

.menu-item-delete-button:hover {
  background-color: #c82333;
}
</style>

