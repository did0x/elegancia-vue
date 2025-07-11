<template>
  <div class="booking-system-form">
    <form :class="bookingStyle" @submit.prevent="handleSubmit">
      <div class="ak-form-field">
        <input
            class="ak-form-input"
            type="text"
            placeholder="Name"
            v-model="inputs.name"
            required
        />
      </div>
      <div class="ak-form-field">
        <input
            class="ak-form-input"
            type="email"
            placeholder="Email"
            v-model="inputs.email"
            required
        />
      </div>
      <div class="select">
        <select class="ak-form-select" name="option" v-model="inputs.people">
          <option value="1">1 Person</option>
          <option value="2">2 People</option>
          <option value="3">3 People</option>
          <option value="4">4 People</option>
          <option value="5">5 People</option>
        </select>
        <div class="select-icon">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
          >
            <path
                d="M8.99516 9.502C8.80335 9.502 8.61135 9.42869 8.46491 9.28225L0.964914 1.78225C0.671852 1.48919 0.671852 1.01463 0.964914 0.72175C1.25798 0.428875 1.73254 0.428688 2.02541 0.72175L8.99516 7.6915L15.9649 0.72175C16.258 0.428688 16.7325 0.428688 17.0254 0.72175C17.3183 1.01481 17.3185 1.48937 17.0254 1.78225L9.52541 9.28225C9.37898 9.42869 9.18698 9.502 8.99516 9.502Z"
                fill="#FFD28D"
            />
          </svg>
        </div>
      </div>
      <div class="ak-form-time-date">
        <input
            class="date-input"
            type="datetime-local"
            v-model="inputs.bookingDate"
            required
        />
      </div>
      <div class="ak-form-field">
        <textarea
            class="ak-form-input"
            placeholder="Special Request"
            v-model="inputs.specialRequest"
        ></textarea>
      </div>
      <div v-if="!styleTwo" class="ak-height-50 ak-height-lg-30"></div>
      <Button type="submit">Reservations</Button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Button from './Button.vue';
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

const { data, error, loading, fetchData } = useApi();

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

