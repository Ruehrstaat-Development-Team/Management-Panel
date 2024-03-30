<template>
  <h2>Rührstaat Squadron</h2>
  <div class="input-wrapper">
    <input type="email" placeholder="E-Mail" class="login-input" />
    <input type="password" placeholder="Passwort" class="login-input" />
  </div>
  <div class="button-wrapper">
    <button class="btn-outlined">Registrieren</button>
    <button class="btn-filled">Anmelden</button>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "centered",
});
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 0;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 20px;
}

.button-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
}
</style>
