<template>
  <button @click="click" :disabled="props.data?.disabled">
    <span
      v-if="props.data?.icon != undefined && !props.data?.loading"
      class="material-symbols-rounded"
      >{{ props.data.icon }}</span
    >
    <Transition :name="flexTransition" :css="props.data?.icon == undefined">
      <span class="loader" v-if="props.data?.loading"></span>
    </Transition>
    <span v-if="props.data?.text != null" class="text">{{
      props.data.text
    }}</span>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object as PropType<ButtonData>,
    required: false,
  },
});
const flexTransition = computed(() =>
  props.data?.icon == undefined ? "flex" : undefined
);
const emit = defineEmits(["click"]);
const click = () => {
  emit("click");
};
</script>

<style lang="scss" scoped>
button {
  border-radius: 50px;
  box-shadow: none;
  border: 2px solid var(--secondary-500);
  font-size: 16px;
  padding: 10px 20px;
  background: var(--secondary-500);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  .material-symbols-rounded {
    font-size: 19px;
    width: 19px;
    aspect-ratio: 1;
    overflow: hidden;
  }
  .flex-enter-active,
  .flex-leave-active {
    transition: max-width var(--animation-time-xs) var(--easing-decelerate),
      border var(--animation-time-xs) var(--easing-decelerate);
  }

  .flex-enter-from,
  .flex-leave-to {
    max-width: 0 !important;
    border: 0px solid #fff !important;
  }
  .loader {
    width: 15px;
    max-width: 15px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 2px solid #fff;
    animation: l20-1 0.8s infinite linear alternate, l20-2 1.6s infinite linear;
  }
  @keyframes l20-1 {
    0% {
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
    }
    12.5% {
      clip-path: polygon(
        50% 50%,
        0 0,
        50% 0%,
        100% 0%,
        100% 0%,
        100% 0%,
        100% 0%
      );
    }
    25% {
      clip-path: polygon(
        50% 50%,
        0 0,
        50% 0%,
        100% 0%,
        100% 100%,
        100% 100%,
        100% 100%
      );
    }
    50% {
      clip-path: polygon(
        50% 50%,
        0 0,
        50% 0%,
        100% 0%,
        100% 100%,
        50% 100%,
        0% 100%
      );
    }
    62.5% {
      clip-path: polygon(
        50% 50%,
        100% 0,
        100% 0%,
        100% 0%,
        100% 100%,
        50% 100%,
        0% 100%
      );
    }
    75% {
      clip-path: polygon(
        50% 50%,
        100% 100%,
        100% 100%,
        100% 100%,
        100% 100%,
        50% 100%,
        0% 100%
      );
    }
    100% {
      clip-path: polygon(
        50% 50%,
        50% 100%,
        50% 100%,
        50% 100%,
        50% 100%,
        50% 100%,
        0% 100%
      );
    }
  }
  @keyframes l20-2 {
    0% {
      transform: scaleY(1) rotate(0deg);
    }
    49.99% {
      transform: scaleY(1) rotate(135deg);
    }
    50% {
      transform: scaleY(-1) rotate(0deg);
    }
    100% {
      transform: scaleY(-1) rotate(-135deg);
    }
  }
}

button:hover {
  cursor: pointer;
  background: var(--secondary-600);
  border: 2px solid var(--secondary-600);
}

button:disabled {
  background: var(--secondary-400);
  border: 2px solid var(--secondary-400);
  color: var(--secondary-800);
  cursor: progress;
  .loader {
    border-color: var(--secondary-800);
  }
}
</style>
