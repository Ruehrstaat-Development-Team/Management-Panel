<template>
  <img :src="src" v-if="!$colorMode.unknown">
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  dark_src: {
    type: String,
    required: true,
  },
  light_src: {
    type: String,
    required: true
  }
});
const colorMode = useColorMode();
const src = computed(() => {
  if(colorMode.value == "dark"){
    return props.dark_src;
  } else {
    return props.light_src;
  }
})
</script>

<style>

</style>