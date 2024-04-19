<template>
  <button @click="click" class="button-icon">
    <span
      v-if="props.data.icon != undefined && !props.data.loading"
      class="material-symbols-rounded"
      >{{ props.data.icon }}</span
    >
    <Transition :name="flexTransition" :css="props.data.icon == undefined">
      <span class="loader-spinner" v-if="props.data.loading"></span>
    </Transition>
    <span v-if="props.data.text != null" class="text">{{
      $t(props.data.text)
    }}</span>
  </button>
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

const flexTransition = computed(() =>
  props.data?.icon == undefined ? "flex" : undefined
);
</script>

<style lang="scss" scoped>
button {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
</style>
