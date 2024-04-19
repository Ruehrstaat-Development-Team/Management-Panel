<template>
  <h2>Ruehrstaat Squadron</h2>
  <div class="input-wrapper">
    <InputOutlined :data="emailInput" v-model="loginData.email" />
    <InputOutlined :data="passwordInput" v-model="loginData.password" />
  </div>
  <div class="button-wrapper">
    <ButtonOutlined
      :data="registerButton"
      @click="console.log('Registrieren')"
    />
    <ButtonPrimary @click="handleSubmit()" :data="loginButton" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "centered",
});

const submitted = ref(false);

const loginButton = ref<ButtonData>({
  text: ref("login"),
  loading: submitted,
  icon: ref("login"),
  disabled: submitted,
});

const registerButton = ref<ButtonData>({
  text: ref("register"),
  icon: ref(undefined),
  loading: ref(false),
  disabled: submitted,
});

const emailInput = ref<InputData>({
  type: ref("email"),
  label: ref("email"),
  placeholder: ref("mailexample"),
  error: ref(undefined),
  disabled: submitted,
  loading: submitted,
  button: ref(undefined),
});

const passwordInput = ref<InputData>({
  type: ref("password"),
  label: ref("password"),
  placeholder: ref(undefined),
  error: ref(undefined),
  disabled: submitted,
  loading: submitted,
  button: ref(undefined),
});

const { $api } = useNuxtApp();
const session = useSession();
const { AlertService } = useAlerts();

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

