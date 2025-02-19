<template>
  <div
    class="bg-transparent w-full flex flex-row p-2 items-center sticky top-0 z-10 h-[52px]"
  >
    <SidebarTrigger class="mr-2" />
    <div class="flex flex-row items-center gap-1">
      <slot />
    </div>
  </div>
  <div class="progress w-full h-1 bg-primary left-right absolute top-[52px] left-0" v-if="showProgress"></div>
</template>

<script lang="ts" setup>
const volatileStore = useVolatileStore();
const showProgress = volatileStore.loading;
defineProps({
  pageTitle: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.progress {
  animation: progress 1s infinite linear;
}

.left-right {
    transform-origin: 0% 50%;
}
    @keyframes progress {
    0% {
        transform:  translateX(-10px) scaleX(0);
    }
    40% {
        transform:  translateX(0) scaleX(0.6);
    }
    100% {
        transform:  translateX(calc(100% + 20px)) scaleX(0.3);
    }
}
</style>