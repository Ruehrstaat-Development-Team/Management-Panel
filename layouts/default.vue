<template>
  <div>
    <NavigationRail v-if="$device.isDesktopOrTablet" :nav="nav"/>
    <NavigationDrawer v-if="$device.isMobile" :nav="nav"/>
    <Header :nav="nav"/>
    <main :class="{'desktop-main': $device.isDesktopOrTablet}">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.desktop-main {
  padding-left: 80px;
  height: 100vh;
}
</style>

<script setup lang="ts">
const nav = navigation();

type Device = {
  userAgent: string;
  isDesktop: boolean;
  isIos: boolean;
  isAndroid: boolean;
  isMobile: boolean;
  isMobileOrTablet: boolean;
  isDesktopOrTablet: boolean;
  isTablet: boolean;
  isWindows: boolean;
  isMacOS: boolean;
  isApple: boolean;
  isSafari: boolean;
  isFirefox: boolean;
  isEdge: boolean;
  isChrome: boolean;
  isSamsung: boolean;
  isCrawler: boolean;
};

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $device: Device;
  }
}
</script>
