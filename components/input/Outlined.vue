<template>
	<div
		class="input-text"
		:class="{ error: $props.errors != null && $props.errors.length > 0 }"
	>
		<input
			@focus="focus()"
			@blur="blur()"
			@change="focus()"
			@input="focus()"
			v-model="model"
			v-bind="$attrs"
		/>
		<span class="label" :class="{ focused: focused }" v-if="$props.label">{{
			$props.label
		}}</span>
		<slot />
		<TransitionGroup name="fade">
			<span
				class="error-text"
				v-for="error in $props.errors"
				:key="error.$uid"
			>
				{{ $t(getValidationError(errorPrefix, error.$uid)) }}
			</span>
		</TransitionGroup>
	</div>
</template>

<script lang="ts" setup>
import type { ErrorObject } from "@vuelidate/core";

const { hooks } = useNuxtApp();

defineProps({
	errors: {
		type: Array as PropType<ErrorObject[]>,
		default: null,
		required: false,
	},
	errorPrefix: {
		type: String,
		default: "general",
		required: false,
	},
	label: {
		type: String,
		default: null,
		required: false,
	},
});

const model = defineModel({ required: true, type: String });

const emit = defineEmits(["blur"]);

var focused = ref(false);
function focus() {
	focused.value = true;
}
function blur() {
	if (model.value == "") {
		focused.value = false;
	}
	emit("blur");
}

hooks.hookOnce("page:loading:end", () => {
	if (model.value != "") {
		focused.value = true;
	}
});
</script>

<style lang="scss" scoped>
.input-text {
	position: relative;
	margin-top: 25px;
	transition-property: margin;
	transition-duration: var(--animation-time-m);
	transition-timing-function: var(--easing-decelerate);

	.loader-spinner {
		border: 2px solid var(--color-on-primary);
		position: absolute;
		top: 3px;
		right: 3px;
		margin: 8px 7px 5px 7px;
	}

	input {
		border-radius: 12px;
		border: 3px solid transparent;
		padding: 5px 35px 5px 10px;
		background: var(--color-surface-variant);
		color: var(--color-on-surface-variant);
		transition-duration: var(--animation-time-s);
		transition-timing-function: var(--easing-decelerate);
		transition-property: border, background, color;
		height: 25px;
		font-size: 16px;
		width: calc(100% - 51px);
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

	input::-ms-reveal,
	input::-ms-clear {
		display: none;
	}

	input:focus::placeholder {
		opacity: 1;
		transition-delay: var(--animation-time-xs);
	}

	input:disabled {
		background: var(--color-surface-variant-disabled);
		color: var(--color-on-surface-variant-disabled);
	}

	.label {
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

	.label.focused {
		top: -22px;
		left: 0px;
		padding: 0 7px;
		font-size: var(--font-size-s);
	}

	.button-icon {
		position: absolute;
		top: 3px;
		right: 3px;
		padding: 8px 7px 5px 7px;
		color: var(--color-on-surface-variant);
		border-radius: 12px;
	}

	.error-text {
		color: var(--color-error);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-bold);
		margin: 2px 0 0 10px;
		position: relative;
		display: block;
		max-height: 18px;
		height: 18px;
		transition-property: height, max-height, opacity, margin;
		transition-duration: var(--animation-time-m);
		transition-timing-function: var(--easing-decelerate);
	}

	.fade-enter-from,
	.fade-leave-to {
		max-height: 0px;
		height: 0px;
		opacity: 0;
		margin: 0 0 0 10px;
	}
}

.input-text.error {
	input {
		border: 3px solid var(--color-error);
	}
}
</style>
