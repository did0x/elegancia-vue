<template>
  <div>
    <CommonHero title="Gallery" link="/" />
    <div class="container">
      <div class="ak-height-150 ak-height-lg-60"></div>
      <div class="row row-cols-1 row-cols-md-2  row-cols-xl-3 g-5">
        <div class="col" v-for="(image, index) in imageGalleryItems" :key="index">
          <router-link :to="image.thumbnail">
            <div class="gallery-hover">
              <img class="h-100" :src="image.src" :alt="image.caption" />
              <div class="gallery-img-overlay">
                <div class="images-info">
                  <div class="gallery-img-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="41"
                      height="41"
                      viewBox="0 0 41 41"
                      fill="none"
                    >
                      <rect
                        x="0.507812"
                        y="19.7305"
                        width="40"
                        height="1"
                        fill="#FFD28D"
                      />
                      <rect
                        x="20.0078"
                        y="0.730469"
                        width="1"
                        height="40"
                        fill="#FFD28D"
                      />
                    </svg>
                  </div>
                  <div class="gallery-hover-info">
                    <div>
                      <h6>{{ image.title }}</h6>
                      <p>{{ image.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CommonHero from '../components/CommonHero.vue';
import { useApi } from '../composables/useApi';

const imageGalleryItems = ref([]);

const { data, error, loading, fetchData } = useApi();

onMounted(async () => {
  await fetchData('imageGallery');
  if (data.value) {
    imageGalleryItems.value = data.value;
  } else if (error.value) {
    console.error('Error fetching image gallery items:', error.value);
  }
});
</script>