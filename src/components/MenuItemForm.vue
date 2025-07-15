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
        <form class="booking-system-form" @submit.prevent="handleSubmit">
          <BaseSelect
            id="category"
            v-model="form.category"
            :options="categoryOptions"
            :required="true"
          />
          <BaseInput
            id="title"
            type="text"
            v-model="form.title"
            placeholder="Title"
            :required="true"
          />
          <BaseInput
            id="price"
            type="text"
            v-model="form.price"
            placeholder="Price"
            :required="true"
          />
          <BaseInput
            id="image"
            type="text"
            v-model="form.image"
            placeholder="Image URL"
          />
          <BaseInput
            id="subTitle"
            type="text"
            v-model="form.subTitle"
            placeholder="Subtitle"
          />
          <BaseInput
            id="specialOffer"
            type="text"
            v-model="form.offer"
            placeholder="Special Offer"
          />
          <Button type="submit" class="ak-btn style-5 color-yellow-bg">{{ isEditing ? 'Update Item' : 'Add Item' }}</Button>
          <Button type="button" @click="$emit('cancel')" class="ak-btn style-5">Cancel</Button>
        </form>
      </section>
    </div>
  </div>
</template>

<script setup>
import {ref, watch, computed, defineProps, defineEmits} from 'vue';
import BaseInput from './BaseInput.vue';
import BaseSelect from './BaseSelect.vue';
import Button from './Button.vue';

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
  offer: '',
});

const isEditing = ref(false);

const categoryOptions = computed(() => {
  return [
    {value: '', text: 'Select a category'},
    ...props.categories.map(category => ({value: category, text: category}))
  ];
});

const resetForm = () => {
  form.value = {
    id: null,
    category: '',
    title: '',
    price: '',
    image: '',
    subTitle: '',
    offer: '',
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
          offer: newItem.offer || '',
        };
        isEditing.value = true;
      } else {
        resetForm();
        isEditing.value = false;
      }
    },
    {immediate: true}
);

const handleSubmit = () => {
  emit('save', {...form.value});
  resetForm();
};
</script>