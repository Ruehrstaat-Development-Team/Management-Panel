<template>
  <SidebarMenuItem>
    <SidebarMenuButton
      :tooltip="item.title"
      :is-active="
        (route.path.includes(item.urlCompare) && item.urlCompare != '/') ||
        (item.urlCompare == '/' && route.path == '/')
      "
      as-child
    >
      <NuxtLink :to="item.location" class="w-full">
        <component :is="item.icon" />
        <span>{{ item.title }}</span>
      </NuxtLink>
    </SidebarMenuButton>
  </SidebarMenuItem>
</template>

<script lang="ts" setup>
defineProps({
  item: {
    type: Object as PropType<SidebarMenuItem>,
    required: true,
  },
});

var route = useRoute();
</script>

<style lang="scss" scoped></style>