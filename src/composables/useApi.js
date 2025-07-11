import { ref } from 'vue';

const API_BASE_URL = 'http://localhost:3001';

export function useApi() {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const fetchData = async (endpoint, options = {}) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(`${API_BASE_URL}/${endpoint}`, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      data.value = await response.json();
    } catch (e) {
      error.value = e;
      console.error('API call error:', e);
    } finally {
      loading.value = false;
    }
  };

  return { data, error, loading, fetchData };
}
