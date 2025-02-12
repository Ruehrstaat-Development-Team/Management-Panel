<template>
	<DropdownMenu>
		<DropdownMenuTrigger>
			<NavigationSidebarUserProfile :user="user">
				<LucideChevronsUpDown :size="16" />
			</NavigationSidebarUserProfile>
		</DropdownMenuTrigger>
		<DropdownMenuContent class="w-64">
			<DropdownMenuGroup>
				<DropdownMenuItem>
					<NuxtLink :to="{ name: 'profile' }">
						<NavigationSidebarUserProfile :user="user" />
					</NuxtLink>
				</DropdownMenuItem>
			</DropdownMenuGroup>
			<DropdownMenuSeparator />
			<DropdownMenuGroup>
        <DropdownMenuItem>
          <LucideSettings :size="16" />
          <span>Settings</span> 
        </DropdownMenuItem>
				<DropdownMenuItem @click="logout()">
          <LucideArrowLeftFromLine :size="16" />
          <span>Logout</span>
        </DropdownMenuItem>
			</DropdownMenuGroup>
		</DropdownMenuContent>
	</DropdownMenu>
</template>

<script lang="ts" setup>
defineProps({
	user: Object as PropType<User>,
});

const { $api } = useNuxtApp();
const session = useSession();
 
const logout = async () => {
  await $api.auth.logout();
  session.setSession(null);
};
</script>

<style lang="scss" scoped></style>
