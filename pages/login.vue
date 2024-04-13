<template>
  <h2>Ruehrstaat Squadron</h2>
  <div class="input-wrapper">
    <InputOutlined
      type="email"
      placeholder="E-Mail"
      v-model="loginData.email"
    />
    <InputOutlined
      type="password"
      placeholder="Passwort"
      v-model="loginData.password"
    />
  </div>
  <div class="button-wrapper">
    <ButtonOutlined
      :text="$t('register')"
      @click="console.log('Registrieren')"
    />
    <ButtonPrimary :text="$t('login')" icon="login" @click="handleSubmit()" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "centered",
});

const { $api, $session } = useNuxtApp();

const loginData = reactive<Credentials>({
  email: "",
  password: "",
  otp: null,
});

async function handleSubmit(): Promise<void> {
  try {
    const credentials: Credentials = {
      email: loginData.email,
      password: loginData.password,
      otp: loginData.otp,
    };
    const response: TokenResponse = await $api.auth.login(credentials);
  } catch (error) {
    console.log(error);
  }
}
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

  button {
    width: 50%;
  }
}
</style>
