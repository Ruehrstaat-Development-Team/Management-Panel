<template>
  <div class="alert-wrapper">
    <div
      class="alert"
      :class="['alert-' + alert.type]"
      v-for="alert in props.alerts"
    >
      <h3 class="alert-title">
        <span v-if="alert.error_code">{{ alert.error_code }} |</span>
        {{ $t("error") }}
      </h3>
      <span class="alert-message">{{ $t(alert.message) }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  alert_service: {
    type: Object as PropType<AlertService>,
    reqired: true,
  },
  alerts: {
    type: Array as PropType<Alert[]>,
    default: [],
  },
});
console.log(props.alerts);
</script>

<style lang="scss" scoped>
.alert-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 20px;
  z-index: 1000;
  pointer-events: none;

  .alert {
    padding: 20px;
    border-radius: 20px;
    min-width: min(300px, calc(100% - 40px));
    min-height: 50px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    pointer-events: all;

    .alert-title {
      font-size: 1.3rem;
      font-weight: 600;
      margin: 0 0 10px 0;
    }
  }

  .alert-success {
    background: var(--success);

  }

  .alert-error {
    background: var(--error);
    color: var(--text-on-error);
  }

  .alert-warning {
    background: var(--warning);
  }

  .alert-info {
    background: var(--info);
  }
}
</style>
