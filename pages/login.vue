<template>
  <div class="flex flex-col space-y-4">
    <h1 class="text-3xl font-bold">Login</h1>
    <Input />
    <Input />
  </div>
  <div class="flex flex-row justify-end mt-3">
    <Button>Login</Button>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'centered',
  title: 'Login | Rührstaat Squadron',
  description: 'Login to your Rührstaat Squadron account',
})
</script>

<style lang="scss" scoped>

</style>