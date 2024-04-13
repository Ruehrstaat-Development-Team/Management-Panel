<template>
  <button @click="onClick()"><span v-if="icon != null" class="material-symbols-rounded">{{ icon }}</span><span v-if="text != null">{{ text }}</span></button>
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

<style lang="scss" scoped>
button {
  border-radius: 50px;
  box-shadow: none;
  border: 2px solid var(--accent-500);
  font-size: 16px;
  padding: 10px 20px;
  background: transparent;
  color: var(--text);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

button:hover{
    cursor: pointer;
}

:root.light-mode {
  button:hover {
    background: rgba(0, 0, 0, 0.1);
  }
}

:root.dark-mode {
  button:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}
</style>
