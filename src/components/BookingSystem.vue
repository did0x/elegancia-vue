<template>
  <div class="booking-system-form">
    <form :class="bookingStyle" @submit.prevent="handleSubmit">
      <BaseInput
        type="text"
        placeholder="Name"
        v-model="inputs.name"
        :required="true"
      />
      <BaseInput
        type="email"
        placeholder="Email"
        v-model="inputs.email"
        :required="true"
      />
      <BaseSelect
        name="option"
        v-model="inputs.people"
        :options="peopleOptions"
      />
      <div class="ak-form-time-date">
        <BaseInput
            type="datetime-local"
            v-model="inputs.bookingDate"
            :required="true"
            inputClass="date-input"
        />
      </div>
      <BaseInput
        type="textarea"
        placeholder="Special Request"
        v-model="inputs.specialRequest"
      />
      <div v-if="!styleTwo" class="ak-height-50 ak-height-lg-30"></div>
      <Button type="submit">Reservations</Button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Button from './Button.vue';
import BaseInput from './BaseInput.vue';
import BaseSelect from './BaseSelect.vue';
import { useApi } from '../composables/useApi';

const props = defineProps({
  styleTwo: Boolean,
});

const inputs = ref({
  name: '',
  email: '',
  people: '1',
  bookingDate: '2025-07-10T19:00',
  specialRequest: '',
});

const peopleOptions = [
  { value: '1', text: '1 Person' },
  { value: '2', text: '2 People' },
  { value: '3', text: '3 People' },
  { value: '4', text: '4 People' },
  { value: '5', text: '5 People' },
];

const { data, error, fetchData } = useApi();

const handleSubmit = async () => {
  const newBooking = {
    ...inputs.value,
    createdDate: new Date().toISOString(),
  };

  await fetchData('bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBooking),
  });

  if (data.value) {
    alert('Reservation created successfully!');
    // Reset form
    inputs.value = {
      name: '',
      email: '',
      people: '1',
      bookingDate: '2024-01-01T19:00',
      specialRequest: '',
    };
  } else if (error.value) {
    alert('An error occurred while creating the reservation.');
  }
};

const bookingStyle = computed(() => ({
  'booking-system-form': true,
  'style-2': props.styleTwo,
}));
</script>

