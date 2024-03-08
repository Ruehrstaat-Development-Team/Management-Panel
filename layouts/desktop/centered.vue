<template>
  <div class="page-wrapper">
    <div class="card">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.page-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  .card {
    position: relative;
    border-radius: 20px;
    width: min(60vh, 90vw);
    height: 80vh;
    background: var(--background-100);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
}
</style>
