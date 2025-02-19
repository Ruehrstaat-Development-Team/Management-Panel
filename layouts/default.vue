<template>
  <SidebarProvider @update:open="openUpdated" :default-open="persistentStore.sidebarOpen">
    <NavigationSidebar />
    <main class="w-full relative">
      <slot />
    </main>
  </SidebarProvider>
</template>

<script lang="ts" setup>
const persistentStore = usePersistentStore();
const openUpdated = function (open: boolean) {
  persistentStore.setSidebarOpen(open);
};
</script>

<style lang="scss" scoped>

</style>