<template>
  <div class="input-text" :class="{error: props.error}">
    <input :type="type" @focus="focus()" @blur="blur()" v-model="model"/>
    <span class="placeholder" :class="{focused: focused}">{{ props.label }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: "text",
  },
  label:{
    type: String,
    required: false,
  },
  error:{
    type: String,
    required: false,
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
  background: var(--background-200);
  color: var(--text);
  transition-duration: var(--animation-time-s);
  transition-behavior: var(--easing-default);
  transition-property: border;
  height: 25px;
  font-size: 16px;
  width: calc(100% - 26px);
}

input:focus {
  outline-style: none;
  border: 3px solid var(--accent-500);
}

.placeholder{
  position: absolute;
  top: 0;
  left: 0;
  padding: 12px 10px;
  font-weight: 600;
  transition-duration: var(--animation-time-s);
  transition-behavior: var(--easing-default);
  transition-property: top, left, padding, font-size;
  pointer-events: none;
}

.placeholder.focused{
  top: -20px;
  left: 0px;
  padding: 0 7px;
  font-size: 15px;
  
}
</style>
