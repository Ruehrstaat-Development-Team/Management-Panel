<template>
  <button class="button-icon" v-bind="$attrs">
    <nuxt-icon
      v-if="$props.icon != undefined && !$props.loading"
      class="material-symbols-rounded"
      :name="$props.icon"
      />
    <Transition :name="flexTransition" :css="$props.icon == undefined">
      <span class="loader-spinner" v-if="$props.loading"></span>
    </Transition>
    <span v-if="$props.text != null" class="text">{{
      $props.text
    }}</span>
  </button>
</template>

<script lang="ts" setup>
var props = defineProps({
  icon: {
    type: String,
    default: undefined,
    required: false,
  },
  loading: {
    type: Boolean,
    default: false,
    required: false,
  },
  text: {
    type: String,
    default: undefined,
    required: false,
  }
})

const flexTransition = computed(() =>
  props.icon == undefined ? "flex" : undefined
);
</script>

<style lang="scss" scoped>
button {
  font-size: var(--font-size-s);

  background: transparent;
  color: var(--color-on-surface-variant);

  border: none;
  border-radius: 12px;
  padding: 11px 10px 6px 10px;
  margin: 0px 0;

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
  backdrop-filter: brightness(0.9);

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
