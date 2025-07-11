<template>
  <li :class="showActivePrent">
    <router-link :to="props.props.link">{{ props.props.title }}</router-link>
    <template v-if="isArray(props.props.children)">
      <ul>
        <li v-for="child in props.props.children" :key="child.key">
          <router-link :to="child.link">{{ child.title }}</router-link>
        </li>
      </ul>
      <span :class="showActive" @click="showsubnav"></span>
    </template>
  </li>
</template>

<script setup>
import { ref, computed } from 'vue';
import { isArray } from 'lodash';

const props = defineProps({
  props: Object,
});

const showMenu = ref(false);

const showsubnav = () => {
  showMenu.value = !showMenu.value;
};

const showActive = computed(() => ({
  'ak-munu_dropdown_toggle': true,
  active: showMenu.value,
}));

const showActivePrent = computed(() => ({
  'menu-item-has-children': true,
  active: showMenu.value,
}));
</script>
