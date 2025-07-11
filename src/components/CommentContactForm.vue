<template>
  <form @submit.prevent="handleSubmit">
    <div class="from-input d-flex gap-2">
      <input
        placeholder="Name"
        class="w-50"
        type="text"
        name="firstName"
        v-model="inputs.firstName"
      />
      <input
        placeholder="Email"
        class="w-50"
        type="email"
        name="email"
        v-model="inputs.email"
      />
    </div>
    <div class="col-md-12">
      <textarea
        name="commentText"
        rows="5"
        v-model="inputs.commentText"
        class="col-12"
        placeholder="Comment text."
      />
    </div>
    <div class="ak-height-40 ak-height-lg-20"></div>
    <Button type="submit">Post Comment</Button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import Button from './Button.vue';

const inputs = ref({
  firstName: '',
  email: '',
  commentText: '',
});

const handleSubmit = () => {
  alert("Data send successfully");
};
</script>
