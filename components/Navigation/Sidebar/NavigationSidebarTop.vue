<template>
	<div
		class="transition-[height,margin,width,border] duration-200 relative overflow-hidden"
		:class="{ 'h-7 m-2 w-7 rounded-md': !open, 'h-20 m-0 w-64 rounded-none': open }"
	>
		<ThemeImage
			class="w-64 h-20"
			dark_src="/HeaderBackgroundDark.webp"
			light_src="/HeaderBackgroundLight.webp"
			alt="Ruehrstaat Squadron Banner Background"
		/>
	</div>
</template>

<script lang="ts" setup>
import { useSidebar } from "~/components/ui/sidebar";
const { open } = useSidebar();
</script>

<style lang="scss" scoped></style>
