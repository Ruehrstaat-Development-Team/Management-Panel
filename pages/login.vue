<template>
	<h2>Ruehrstaat Squadron</h2>
	<form @submit.prevent="handleSubmit()">
		<div class="input-wrapper">
			<InputOutlined
				v-model="loginData.email"
				:label="$t('pages_login_email')"
				:placeholder="$t('pages_login_email_placeholder')"
				:disabled="submitted"
				:errors="$v.email.$errors"
				:error-prefix="'pages_login_error'"
				type="email"
				autocomplete="email"
				@blur="$v.email.$touch"
			/>
			<InputOutlined
				v-model="loginData.password"
				:label="$t('pages_login_password')"
				:placeholder="$t('pages_login_password_placeholder')"
				:disabled="submitted"
				:errors="$v.password.$errors"
				:error-prefix="'pages_login_error'"
				type="password"
				autocomplete="current-password"
				@blur="$v.password.$touch"
			>
			<template v-slot:slot-right>
				<ButtonIcon
					id="toggle-password-visibility"
					:data="passwordButton"
					@click="passwordVisible = !passwordVisible"
				/>
			</template>
			</InputOutlined>
		</div>
		<div class="button-wrapper">
			<ButtonOutlined
				:data="registerButton"
				@click="console.log('Registrieren')"
			/>
			<ButtonPrimary :data="loginButton" type="submit" />
		</div>
	</form>
</template>

<script lang="ts" setup>
import { required, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

definePageMeta({
	layout: "centered",
});

const loginData = reactive<Credentials>({
	email: "",
	password: "",
	otp: null,
});

const rules = computed(() => {
	return {
		email: { required, email },
		password: { required },
	};
});

const $v = useVuelidate(rules, loginData);

const submitted = ref(false);
const passwordVisible = ref(false);


const loginButton: ButtonData = reactive({
	text: "pages_login_login",
	icon: "login",
	loading: submitted,
	disabled: submitted,
	tooltip: undefined,
});

const registerButton: ButtonData = reactive({
	text: "pages_login_register",
	icon: undefined,
	loading: false,
	disabled: submitted,
	tooltip: undefined,
});



const passwordButton: ButtonData = reactive({
	icon: computed(() =>
		passwordVisible.value ? "visibility" : "visibility_off"
	),
	text: undefined,
	loading: false,
	disabled: submitted,
	tooltip: computed(() =>
		passwordVisible.value ? "pages_login_tooltip_hide_password" : "pages_login_tooltip_show_password"
	),
});

const { $api } = useNuxtApp();
const session = useSession();
const { AlertService } = useAlerts();

async function handleSubmit(): Promise<void> {
	try {
		$v.value.$validate();
		if ($v.value.$error) {
			AlertService.addAlert({
				title: "warning",
				type: "warning",
				code: "V0001",
				ttl: 5,
			} as Alert);
			return;
		}
		submitted.value = true;
		const credentials: Credentials = {
			email: loginData.email,
			password: loginData.password,
			otp: loginData.otp,
		};
		const response: SessionToken = await $api.auth.login(credentials);
	} catch (errorBody) {
		submitted.value = false;
	}
}
</script>

<style lang="scss" scoped>
h2 {
	margin: 0 0 10px 0;
}

.input-wrapper {
	display: flex;
	flex-direction: column;
	gap: 5px;
	margin-bottom: 20px;

	#toggle-password-visibility {
		position: absolute;
		right: 0;
		top: 0;
	}
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
