<template>
	<NuxtLink :to="{ name: 'login' }" class="hover:bg-sidebar-accent" :class="{'p-2': open, 'p-[2px]': !open}">
		<div class="flex flex-row items-center gap-3">
			<div
				class="flex items-center justify-center bg-primary text-primary-foreground rounded-sm p-1 size-7 align-middle"
			>
				<LucideUser :size="16" />
			</div>
			<span class="flex-grow flex flex-col justify-center items-start">
				<span class="leading-none whitespace-nowrap">Login</span>
			</span>
		</div>
	</NuxtLink>
</template>

<script lang="ts" setup>
import { useSidebar } from "~/components/ui/sidebar";

const { open } = useSidebar();
</script>

<style lang="scss" scoped></style>
