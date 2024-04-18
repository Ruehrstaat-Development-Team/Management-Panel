<template>
  <button @click="click"><span v-if="props.data.icon != null" class="material-symbols-rounded">{{ props.data.icon }}</span><span v-if="props.data.text != null">{{ props.data.text }}</span></button>
</template>

<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object as PropType<ButtonDataInternal>,
    required: true,
  },
});

const emit = defineEmits(["click"]);
const click = () => {
  emit("click");
};
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