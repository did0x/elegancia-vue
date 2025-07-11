<template>
  <div class="modal-backdrop" @click.self="$emit('cancel')">
    <div class="menu-item-form-modal">
      <header class="modal-header">
        <h2 class="ak-section-title" ref="animTitle">{{ isEditing ? 'Edit Menu Item' : 'Add New Menu Item' }}</h2>
        <button type="button" class="btn-close" @click="$emit('cancel')" aria-label="Close modal">
          x
        </button>
      </header>
      <section class="modal-body">
        <form @submit.prevent="handleSubmit">
          <div class="ak-form-field">
            <label for="category">Category:</label>
            <select id="category" v-model="form.category" class="ak-form-select" required>
              <option value="">Select a category</option>
              <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
            </select>
          </div>
          <div class="ak-form-field">
            <label for="title">Title:</label>
            <input type="text" id="title" v-model="form.title" class="ak-form-input" required />
          </div>
          <div class="ak-form-field">
            <label for="price">Price:</label>
            <input type="text" id="price" v-model="form.price" class="ak-form-input" required />
          </div>
          <div class="ak-form-field">
            <label for="image">Image URL:</label>
            <input type="text" id="image" v-model="form.image" class="ak-form-input" />
          </div>
          <div class="ak-form-field">
            <label for="subTitle">Subtitle:</label>
            <input type="text" id="subTitle" v-model="form.subTitle" class="ak-form-input" />
          </div>
          <div class="ak-form-field">
            <label for="priceSubTitle">Price Subtitle:</label>
            <input type="text" id="priceSubTitle" v-model="form.priceSubTitle" class="ak-form-input" />
          </div>
          <button type="submit" class="ak-btn ak-btn-primary">{{ isEditing ? 'Update Item' : 'Add Item' }}</button>
          <button type="button" @click="$emit('cancel')" class="ak-btn ak-btn-secondary">Cancel</button>
        </form>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    default: null,
  },
  categories: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['save', 'cancel']);

const form = ref({
  id: null,
  category: '',
  title: '',
  price: '',
  image: '',
  subTitle: '',
  priceSubTitle: '',
});

const isEditing = ref(false);

const resetForm = () => {
  form.value = {
    id: null,
    category: '',
    title: '',
    price: '',
    image: '',
    subTitle: '',
    priceSubTitle: '',
  };
};

watch(
  () => props.item,
  (newItem) => {
    if (newItem) {
      form.value = {
        id: newItem.id || null,
        category: newItem.category || '',
        title: newItem.title || '',
        price: newItem.price || '',
        image: newItem.image || '',
        subTitle: newItem.subTitle || '',
        priceSubTitle: newItem.priceSubTitle || '',
      };
      isEditing.value = true;
    } else {
      resetForm();
      isEditing.value = false;
    }
  },
  { immediate: true }
);

const handleSubmit = () => {
  emit('save', { ...form.value });
  resetForm();
};
</script>
