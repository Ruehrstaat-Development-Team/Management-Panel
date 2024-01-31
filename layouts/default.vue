<template>
  <div>
    <NavigationRail />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
main{
  padding-left: 80px;
  height: 100vh;
}
</style>