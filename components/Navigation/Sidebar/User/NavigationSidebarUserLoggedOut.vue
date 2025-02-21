<template>
	<DropdownMenu>
		<DropdownMenuTrigger
			class="hover:bg-sidebar-accent rounded-md transition-[padding] duration-200"
			:class="{ 'p-2': open, 'p-[2px]': !open }"
		>
			<div class="flex flex-row items-center gap-3">
				<div
					class="flex items-center justify-center bg-primary text-primary-foreground rounded-sm p-1 size-7 min-h-7 min-w-7 align-middle"
				>
					<LucideUser :size="16" />
				</div>
				<span
					class="flex-grow flex flex-col justify-center items-start"
				>
					<span class="leading-none whitespace-nowrap">Settings</span>
				</span>
			</div>
		</DropdownMenuTrigger>
		<DropdownMenuContent class="w-60">
			<DropdownMenuGroup>
				<DropdownMenuItem>
					<NuxtLink
						:to="{ name: 'settings' }"
						class="flex items-center gap-2 w-full h-full"
					>
						<LucideSettings :size="16" />
						<span>Settings</span>
					</NuxtLink>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<NuxtLink
						:to="{ name: 'login' }"
						class="flex items-center gap-2 w-full h-full"
					>
						<LucideArrowRightFromLine :size="16" />
						<span>Login</span>
					</NuxtLink>
				</DropdownMenuItem>
			</DropdownMenuGroup>
		</DropdownMenuContent>
	</DropdownMenu>
</template>

<script lang="ts" setup>
import { useSidebar } from "~/components/ui/sidebar";
const { open } = useSidebar();
</script>

<style lang="scss" scoped></style>
