<template>
  <div class="img-container-overlay" ref="imagesShowContainer">
    <img :src="image" alt="overlay-image" class="images-show" ref="imagesShow" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useGsap } from '../composables/useGsap';
import gsap from 'gsap';

const props = defineProps({
  image: String,
  imagesZoom: Boolean,
});

const imagesShowContainer = ref(null);
const imagesShow = ref(null);

const g = useGsap();

onMounted(() => {
  g.add(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: imagesShowContainer.value,
        start: "top 90%",
        end: "bottom 20%",
        markers: false,
        toggleActions: "play none none none",
      },
    });
    tl.to(imagesShowContainer.value, { duration: 0.7, "--height": "100%", ease: "Power2.ease" })
      .to(imagesShowContainer.value, { duration: 0.7, "--height": "0%", ease: "Power2.ease" })
      .to(imagesShow.value, { duration: 0.2, opacity: 1, delay: -0.7 })
      .from(imagesShow.value, {
        duration: 1,
        scale: 1.2,
        ease: "Power2.easeInOut",
        delay: -0.5,
      });
    if (props.imagesZoom) {
      let tl12 = gsap.timeline({
        scrollTrigger: {
          trigger: imagesShowContainer.value,
          scrub: 1,
          markers: false,
        },
      });
      tl12.fromTo(
        imagesShow.value,
        { scale: 1 },
        {
          scale: 1.3,
          duration: 3.5,
          ease: "expoScale(1, 1.15)",
          transformOrigin: "50% 50%",
          z: 0.1,
          rotationZ: "0.01",
        },
        "<"
      );
    }
  }, imagesShowContainer.value);
});
</script>
