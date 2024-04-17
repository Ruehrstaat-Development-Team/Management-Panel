<template>
  <button @click="props.onClick()"><span v-if="props.icon != null" class="material-symbols-rounded">{{ props.icon }}</span><span v-if="props.text != null">{{ props.text }}</span></button>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
  onClick: {
    type: Function,
    required: true,
  },
});
</script>

<style>
button{
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
</style>