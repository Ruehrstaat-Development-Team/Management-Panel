<template>
  <div>
    <SharedHeader
      :nav="nav"
      :class="{ 'desktop-header': $device.isDesktopOrTablet }"
    />
    <NavigationRail v-if="$device.isDesktopOrTablet" :nav="nav" />
    <NavigationDrawer v-if="$device.isMobile" :nav="nav" />
    <main :class="{ 'desktop-main': $device.isDesktopOrTablet }">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.desktop-main {
  margin-left: 80px;
  margin-top: 0px;
}

.desktop-header {
  margin-left: 80px;
}

main{
  margin-top: 200px;
}
</style>

<script setup lang="ts">
const nav = navigation();

const router = useRouter();
var currentRoute = router.currentRoute;
var currentRouteName = computed(() => {return nav.Destinations.find((d: any) => d.Path === currentRoute.value.path)?.Name + " - Rührstaat Squadron"});
useHead({
  title: currentRouteName 
})

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

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $device: Device;
  }
}
</script>
