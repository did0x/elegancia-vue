<template>
  <section>
    <div class="ak-height-150 ak-height-lg-60"></div>
    <div class="container">
      <SectionTitle
        title="Appetizers"
        subTitle="Appetizers"
        alignment="center"
      />
      <div class="ak-height-65 ak-height-lg-30"></div>
      <template v-if="styleTwo">
        <div class="d-flex justify-content-between flex-wrap gap-5 gap-md-0">
          <div class="ak-menu-list style-2">
            <FoodMenuItem
              v-for="(item, index) in foodMenu.slice(0, 5)"
              :key="index"
              :data="item"
            />
          </div>
          <div>
            <img :src="foodItemImage" alt="..." />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="ak-menu-list">
          <FoodMenuItem
            v-for="(item, index) in foodMenu"
            :key="item.id || index"
            :data="item"
          />
        </div>
      </template>
      <div v-if="errorMessage" class="error-message text-center text-danger mt-4">
        {{ errorMessage }}
      </div>

      <div class="ak-height-20 ak-height-lg-20"></div>

      <div class="text-md-center">
        <Button to="/menu">View more</Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SectionTitle from './SectionTitle.vue';
import FoodMenuItem from './FoodMenuItem.vue';
import Button from './Button.vue';

defineProps({
  styleTwo: Boolean,
});

const foodMenu = ref([]);
const foodItemImage = "/assets/img/itemShow/food-menu.webp";

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3001/foodMenus');
    const data = await response.json();
    foodMenu.value = data[0].foodMenu; // Assuming you want the first foodMenu array
  } catch (error) {
    console.error('Error fetching food menus:', error);
  }
});
</script>
