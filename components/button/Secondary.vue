<template>
  <button class="button-secondary" v-bind="$attrs">
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

  background: var(--color-secondary);
  color: var(--color-on-secondary);

  border: 2px solid var(--color-secondary);
  border-radius: 50px;

  padding: 10px 20px;

  box-shadow: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  .material-symbols-rounded {
    font-size: var(--font-size-m);
    width: var(--font-size-m);
    height: var(--font-size-m);
    overflow: hidden;
  }
  
  .flex-enter-active,
  .flex-leave-active {
    transition-property: border, max-width;
    transition-timing-function: var(--easing-decelerate);
    transition-duration: var(--animation-time-xs);
  }

  .flex-enter-from,
  .flex-leave-to {
    max-width: 0 !important;
    border: 0px solid var(--color-on-secondary) !important;
  }

  .loader-spinner {
    border: 2px solid var(--color-on-secondary);
  }
}

button:hover {
  background: var(--color-secondary-hover);
  color: var(--color-on-secondary-hover);
  border: 2px solid var(--color-secondary-hover);

  cursor: pointer;
}

button:disabled {
  background: var(--color-secondary-disabled);
  color: var(--color-on-secondary-disabled);
  border: 2px solid var(--color-secondary-disabled);

  cursor: progress;

  .loader-spinner {
    border-color: var(--color-on-secondary-disabled);
  }
}
</style>

