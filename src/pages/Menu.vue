<template>
  <div>
    <CommonHero title="Our Menu" link="/"/>
    <div class="ak-column">
      <div class="ak-height-65 ak-height-lg-30"></div>
      <div class="ak-btn style-5 color-yellow-bg" @click="addNewItem">Add New Menu Item</div>
    </div>

    <MenuItemForm
        v-if="showForm"
        :item="editingItem"
        :categories="menuCategories"
        @save="saveMenuItem"
        @cancel="showForm = false"
    />

    <div
        v-for="(item, i) in foodMenus"
        :key="i"
        class="set-bg-img-section"
        :ref="(el) => (imageContainers[i] = el)"
    >
      <img
          :src="item.bgImageShow"
          alt="..."
          class="imagesZoom bg-img ak-bg"
          :ref="(el) => (imageZoomIns[i] = el)"
      />

      <div class="ak-height-150 ak-height-lg-60"></div>
      <div class="container">
        <SectionTitle
            :title="item.headingText.title"
            :subTitle="item.headingText.subTitle"
            :alignment="item.headingText.alignment"
        />
        <div class="ak-height-65 ak-height-lg-30"></div>
        <div class="ak-menu-list">
          <FoodMenuItem
              v-for="(foodItem, index) in item.foodMenu"
              :key="index"
              :data="foodItem"
              @edit="editMenuItem"
              @delete="deleteMenuItem"
          />
        </div>
      </div>

      <div class="ak-height-150 ak-height-lg-0"></div>
      <div class="ak-height-150 ak-height-lg-60"></div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, computed} from 'vue';
import CommonHero from '../components/CommonHero.vue';
import FoodMenuItem from '../components/FoodMenuItem.vue';
import SectionTitle from '../components/SectionTitle.vue';
import MenuItemForm from '../components/MenuItemForm.vue';
import {useGsap, imageZoomInOut} from '../composables/useGsap';
import { useApi } from '../composables/useApi';

const foodMenus = ref([]);
const imageContainers = ref([]);
const imageZoomIns = ref([]);
const showForm = ref(false);
const editingItem = ref(null);

const g = useGsap();

const { data, error, fetchData } = useApi();

const menuCategories = computed(() => {
  return foodMenus.value.map(menu => menu.headingText.title);
});

const loadFoodMenus = async () => {
  await fetchData('foodMenus');
  if (data.value) {
    foodMenus.value = data.value;
    foodMenus.value.forEach((item, index) => {
      g.add(() => imageZoomInOut(imageContainers.value[index], imageZoomIns.value[index]));
    });
  } else if (error.value) {
    console.error('Error fetching food menu list:', error.value);
  }
};

onMounted(() => {
  loadFoodMenus();
});

const addNewItem = () => {
  editingItem.value = null;
  showForm.value = true;
};

const editMenuItem = (item) => {
  editingItem.value = {...item};
  showForm.value = true;
};

const saveMenuItem = async (item) => {
  const newCategoryName = item.category;
  const newCategoryIndex = foodMenus.value.findIndex(menu => menu.headingText.title === newCategoryName);

  if (newCategoryIndex === -1) {
    console.error("New category not found:", newCategoryName);
    return;
  }

  if (item.id) {
    let originalCategoryIndex = -1;
    let itemIndex = -1;

    // Find the original category and item index
    for (let i = 0; i < foodMenus.value.length; i++) {
      const menu = foodMenus.value[i];
      const foundIndex = menu.foodMenu.findIndex(foodItem => foodItem.id === item.id);
      if (foundIndex !== -1) {
        originalCategoryIndex = i;
        itemIndex = foundIndex;
        break;
      }
    }

    if (originalCategoryIndex === -1) {
      console.error("Original item not found for editing");
      return;
    }

    const originalCategory = foodMenus.value[originalCategoryIndex];

    if (originalCategory.headingText.title !== newCategoryName) {
      // Category has changed, so move the item
      const itemToMove = originalCategory.foodMenu.splice(itemIndex, 1)[0];
      Object.assign(itemToMove, item);

      const newCategory = foodMenus.value[newCategoryIndex];
      newCategory.foodMenu.push(itemToMove);

      // Update both categories in the backend
      await fetchData(`foodMenus/${originalCategory.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(originalCategory),
      });

      await fetchData(`foodMenus/${newCategory.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCategory),
      });

    } else {
      // Category is the same, just update the item
      const categoryData = foodMenus.value[newCategoryIndex];
      categoryData.foodMenu[itemIndex] = {...item};
      await fetchData(`foodMenus/${categoryData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoryData),
      });
    }
  } else {
    // Add new item
    const newItem = {...item, id: Date.now()}; // Assign a unique ID
    const categoryData = foodMenus.value[newCategoryIndex];
    categoryData.foodMenu.push(newItem);
    await fetchData(`foodMenus/${categoryData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoryData),
    });
  }

  showForm.value = false;
  loadFoodMenus(); // Re-fetch data to update the UI
};

const deleteMenuItem = async (itemId) => {
  if (!confirm('Are you sure you want to delete this item?')) return;

  let categoryIdToDeleteFrom = null;
  let itemIndexToDelete = -1;

  for (let i = 0; i < foodMenus.value.length; i++) {
    const category = foodMenus.value[i];
    const foundIndex = category.foodMenu.findIndex(item => item.id === itemId);
    if (foundIndex !== -1) {
      categoryIdToDeleteFrom = category.id;
      itemIndexToDelete = foundIndex;
      break;
    }
  }

  if (categoryIdToDeleteFrom !== null && itemIndexToDelete !== -1) {
    const categoryData = foodMenus.value.find(cat => cat.id === categoryIdToDeleteFrom);
    categoryData.foodMenu.splice(itemIndexToDelete, 1);

    await fetchData(`foodMenus/${categoryIdToDeleteFrom}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoryData),
    });
    loadFoodMenus(); // Re-fetch data to update the UI
  } else {
    console.error("Item not found for deletion:", itemId);
  }
};
</script>