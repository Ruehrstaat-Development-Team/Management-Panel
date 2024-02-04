<template>
  <div class="dialog-background" :class="{expanded: props.nav.IsExpanded.value}" @click="toggleExpanded()">
    
  </div>
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

<style scoped lang="scss">
@use "~/assets/css/main.scss";
.dialog-background {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: black;
  opacity: 0;
  transition: opacity var(--animation-time-l) var(--easing-default);
  pointer-events: none;
}
.dialog-background.expanded {
  opacity: 0.5;
  pointer-events: all;
}
</style>