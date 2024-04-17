<template>
  <h2>Ruehrstaat Squadron</h2>
  <div class="input-wrapper">
    <InputOutlined
      type="email"
      label="E-Mail"
      v-model="loginData.email"
    />
    <InputOutlined
      type="password"
      label="Passwort"
      v-model="loginData.password"
    />
  </div>
  <div class="button-wrapper">
    <ButtonOutlined
      :text="$t('register')"
      @click="console.log('Registrieren')"
    />
    <ButtonPrimary @click="handleSubmit()" :data="loginButton"/>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "centered",
});

const submitted = ref(false);

const loginButton = ref<ButtonDataRef>({
  text: "Login",
  loading: submitted,
  icon: "login",
  disabled: submitted,
});

const { $api } = useNuxtApp();
const session = useSession();
const { alerts, AlertService } = useAlerts();

const loginData = reactive<Credentials>({
  email: "",
  password: "",
  otp: null,
});

async function handleSubmit(): Promise<void> {
  try {
    submitted.value = true;
    const credentials: Credentials = {
      email: loginData.email,
      password: loginData.password,
      otp: loginData.otp,
    };
    const response: SessionToken = await $api.auth.login(credentials);
    session.setSession(response);
    submitted.value = false;
  } catch (errorBody) {
    const data = errorBody as ApiError;
    AlertService.addAlert({
      title: "Error",
      message: data.error,
      type: "error",
      ttl: 5,
    } as Alert);
    submitted.value = false;
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
