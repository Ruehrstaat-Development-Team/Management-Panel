<template>
  <div class="page-wrapper">
    <div class="page-header">
      <div class="background-image">
        <ThemeImage :dark_src="'HeaderBackgroundDark.webp'" :light_src="'HeaderBackgroundLight.webp'" />
      </div>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.page-wrapper {
  height: 100vh;
  width: 100vw;
  background: var(--background-100);

  .page-header {
    position: relative;
    height: 20vh;
    width: 100%;
    overflow: hidden;

    .background-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 80%;
    }
  }
}
</style>
