<template>
	<DropdownMenu>
		<DropdownMenuTrigger
			class="hover:bg-sidebar-accent rounded-md transition-[padding] duration-200"
			:class="{ 'p-2': open, 'p-[2px]': !open }"
		>
			<NavigationSidebarUserProfile :user="user">
				<LucideChevronsUpDown :size="16" />
			</NavigationSidebarUserProfile>
		</DropdownMenuTrigger>
		<DropdownMenuContent class="w-60">
			<DropdownMenuGroup>
				<DropdownMenuItem>
					<NuxtLink :to="{ name: 'profile' }">
						<NavigationSidebarUserProfile :user="user" >
							<LucideArrowUpRight :size="16" />
						</NavigationSidebarUserProfile>
					</NuxtLink>
				</DropdownMenuItem>
			</DropdownMenuGroup>
			<DropdownMenuSeparator />
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
				<DropdownMenuItem
					@click="logout()"
					class="text-destructive focus:bg-destructive focus:text-destructive-foreground"
				>
					<LucideArrowLeftFromLine :size="16" />
					<span>Logout</span>
				</DropdownMenuItem>
			</DropdownMenuGroup>
		</DropdownMenuContent>
	</DropdownMenu>
</template>

<script lang="ts" setup>
import { toast } from "vue-sonner";
import { useSidebar } from "~/components/ui/sidebar";

defineProps({
	user: Object as PropType<User>,
});

const { open } = useSidebar();

const { $api } = useNuxtApp();
const authRep = authRepository($api);
const session = useSessionStore();
const store = useUserStore();

const logout = async () => {
	try {
		await authRep.logout();
		session.setSession(null);
		store.setUser(null);
		toast.success("Logout success");
	} catch (e) {
		toast.error("Logout failed");
	}
};
</script>

<style lang="scss" scoped></style>
