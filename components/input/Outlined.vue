<template>
  <div class="input-text" :class="{error: $props.data.error}">
    <input :type="$props.data.type" @focus="focus()" @blur="blur()" v-model="model" :placeholder="$props.data.placeholder ? $t($props.data.placeholder) : ''"/>
    <span class="label" :class="{focused: focused}" v-if="$props.data.label">{{ $t($props.data.label) }}</span>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';

defineProps({
  data: {
    type: Object as PropType<InputDataInternal>,
    required: true,
  }
})

const model = defineModel({required: true, type: String})
var focused = ref(false);
function focus(){
  focused.value = true;
}
function blur(){
  if(model.value == ""){
    focused.value = false;
  }
}

onMounted(() => {
  if(model.value != ""){
    focused.value = true;
  }
})
</script>

<style lang="scss" scoped>

.input-text{
  position: relative;
  margin-top: 12px;
  margin-bottom: 5px;
}

input {
  border-radius: 12px;
  border: 3px solid transparent;
  padding: 5px 10px;
  background: var(--color-surface-variant);
  color: var(--color-on-surface-variant);
  transition-duration: var(--animation-time-s);
  transition-timing-function: var(--easing-decelerate);
  transition-property: border, background, color;
  height: 25px;
  font-size: 16px;
  width: calc(100% - 26px);
}

input:focus {
  outline-style: none;
  border: 3px solid var(--color-primary);
}

input::placeholder {
  opacity: 0;
  color: var(--color-on-surface-variant-disabled);
  transition-property: opacity;
  transition-duration: var(--animation-time-m);
  transition-timing-function: var(--easing-decelerate);
  transition-delay: 0s;
}

input:focus::placeholder {
  opacity: 1;
  transition-delay: var(--animation-time-xs);
}

.label{
  position: absolute;
  top: 0;
  left: 0;
  padding: 12px 10px;
  font-weight: 600;
  transition-duration: var(--animation-time-m);
  transition-timing-function: var(--easing-decelerate);
  transition-property: top, left, padding, font-size;
  pointer-events: none;
  font-size: var(--font-size-s);
}

.label.focused{
  top: -20px;
  left: 0px;
  padding: 0 7px;
  font-size: var(--font-size-s);
  
}
</style>
