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
				:type="passwordType"
				autocomplete="current-password"
				@blur="$v.password.$touch"
			>
				<template v-slot:slot-right>
					<ButtonIcon
						id="toggle-password-visibility"
						:icon="passwordVisibleIcon"
						type="button"
						@click="passwordVisible = !passwordVisible"
						v-tooltip="$t(passwordVisibleTooltip)"
					/>
				</template>
			</InputOutlined>
		</div>
		<div class="button-wrapper">
			<ButtonOutlined
				:text="$t('pages_login_register')"
				:disabled="submitted"
				type="button"
				@click="console.log('Registrieren')"
			/>
			<ButtonPrimary
				:text="$t('pages_login_login')"
				:loading="submitted"
				:disabled="submitted"
				icon="login"
				type="submit"
			/>
			<div class="divider">
				<div class="line"></div>
				<div class="or">{{ $t("general_or") }}</div>
				<div class="line"></div>
			</div>
			<ButtonOutlined
				class="sso-button"
				:text="$t('pages_login_sso')"
				:disabled="submitted"
				icon="passkey"
				type="button"
				@click="console.log('SSO')"
			/>
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

const passwordVisibleIcon = computed(() =>
	passwordVisible.value ? "visibility" : "visibility_off"
);

const passwordType = computed(() =>
	passwordVisible.value ? "text" : "password"
);

const passwordVisibleTooltip = computed(() =>
	passwordVisible.value
		? "pages_login_tooltip_hide_password"
		: "pages_login_tooltip_show_password"
);

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
		const response: SessionToken | void = await $api.auth
			.login(credentials)
			.catch(() => {
				submitted.value = false;
			})
			.then(() => {
				const route = useRoute();
				const redirect = route.query.redirect as string;
				navigateTo(redirect || "/");
			});
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
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-content: stretch;
	gap: 1rem;
	width: 100%;

	.divider {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		gap: 1rem;
		margin: 0.25rem 20px;

		.line {
			border-top: 1px solid var(--color-on-surface-variant);
		}

		.or {
			color: var(--color-on-surface-variant);
		}
		grid-column: 1 / span 2;
	}

	.sso-button {
		grid-column: 1 / span 2;
	}
}
</style>
