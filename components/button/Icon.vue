<template>
  <button @click="click" :disabled="data.disabled.value" class="button-icon" v-tooltip="{ content: data.tooltip.value ? $t(data.tooltip.value) : '', noAutoFocus: true}" :type="$props.type">
    <nuxt-icon
      v-if="data.icon.value != undefined && !data.loading.value"
      class="material-symbols-rounded"
      :name="data.icon.value"
      />
    <Transition :name="flexTransition" :css="data.icon.value == undefined">
      <span class="loader-spinner" v-if="data.loading.value"></span>
    </Transition>
    <span v-if="data.text.value != null" class="text">{{
      $t(data.text.value)
    }}</span>
  </button>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';

const props = defineProps({
  data: {
    type: Object as PropType<ButtonData>,
    required: true,
  },
  type: {
    type: String as PropType<"button" | "submit" | "reset">,
    default: "button",
    required: false,
  },
});

const data = toRefs(props.data);

const emit = defineEmits(["click"]);
const click = () => {
  emit("click");
};

const flexTransition = computed(() =>
  data?.icon == undefined ? "flex" : undefined
);
</script>

<style lang="scss" scoped>
button {
  font-size: var(--font-size-s);

  background: transparent;
  color: var(--color-on-surface-variant);

  border: none;

  padding: 10px 20px;

  box-shadow: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  .material-symbols-rounded {
    font-size: var(--font-size-m);
    width: var(--font-size-m);
    overflow: hidden;
  }

  .flex-enter-active,
  .flex-leave-active {
    transition-property: max-width, border;
    transition-timing-function: var(--easing-decelerate);
    transition-duration: var(--animation-time-xs);
  }

  .flex-enter-from,
  .flex-leave-to {
    max-width: 0 !important;
    border: 0px solid var(--color-on-surface-variant) !important;
  }

  .loader-spinner {
    border: 2px solid var(--color-on-surface-variant);
  }
}

button:hover {
  background: var(--color-surface-hover);

  cursor: pointer;
}

button:disabled {
  color: var(--color-on-surface-variant-disabled);
  
  cursor: progress;

  .loader-spinner {
    border-color: var(--color-on-surface-variant-disabled);
  }
}
</style>
