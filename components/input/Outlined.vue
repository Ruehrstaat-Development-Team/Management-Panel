<template>
	<div
		class="input-text"
		:class="{ error: $props.errors != null && $props.errors.length > 0 }"
		:style="{
			'margin-bottom':
				18 * ($props.errors ? $props.errors.length : 0) + 'px',
		}"
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
		<div class="input-outlined-slot-right">
			<slot name="slot-right"/>
		</div>
		<div class="input-outlined-slot-left">
			<slot name="slot-left"/>
		</div>
		<div class="input-outlined-slot-bottom">
			<slot name="slot-bottom"/>
		</div>
		<div class="input-outlined-slot-top">
			<slot name="slot-top"/>
		</div>
		<TransitionGroup name="fade" tag="div" class="error-wrapper">
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

	transition-property: margin-bottom;
	transition-duration: var(--animation-time-m);
	transition-timing-function: var(--easing-decelerate);

	margin-bottom: 0px;

	.loader-spinner {
		border: 2px solid var(--color-on-primary);
		position: absolute;
		top: 3px;
		right: 3px;
		margin: 8px 7px 5px 7px;
	}

	input {
		border-radius: 12px;
		z-index: 1;
		position: relative;
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
		z-index: 1;
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

	.input-outlined-slot-right {
		z-index: 1;
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
	}

	.input-outlined-slot-left{
		z-index: 1;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
	}

	.input-outlined-slot-bottom {
		z-index: 2;
		position: absolute;
		top: 41px;
		left: 0;
		width: 100%;
	}

	.input-outlined-slot-top {
		z-index: 2;
		position: absolute;
		bottom: 41px;
		left: 0;
		width: 100%;
	}

	.error-wrapper {
		position: absolute;
		bottom: -20px;
		left: 0;
		display: flex;
		flex-direction: column;

		.error-text {
			color: var(--color-error);
			font-size: var(--font-size-xs);
			font-weight: var(--font-weight-bold);
			margin: 0px 0 0 10px;
			position: relative;
			height: 18px;
			transition-property: opacity transform;
			transition-duration: var(--animation-time-m);
			transition-timing-function: var(--easing-decelerate);
		}
		.fade-enter-from {
			opacity: 0;
			transform: translateY(-18px);
		}
		.fade-leave-to {
			opacity: 0;
			transform: translateY(18px);
		}
	}
}

.input-text.error {
	input {
		border: 3px solid var(--color-error);
	}
}
</style>
