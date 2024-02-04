<template>
  <header class="site-header">
    <span v-if="$device.isMobile" class="material-symbols-rounded" @click="toggleExpanded()">
      menu
    </span>
    <div class="title" v-if="props.nav.IsExpanded.value">
        Test
    </div>
    <div class="">

    </div>
  </header>
</template>

<script lang="ts" setup>
const props = defineProps({
  nav: {
    type: Object,
    required: true,
  }
})

const toggleExpanded = () => {
  props.nav.IsExpanded.value = !props.nav.IsExpanded.value;
};
</script>

<style>

</style>