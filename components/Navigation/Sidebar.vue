<template>
	<Sidebar collapsible="icon" class="overflow-hidden">
		<SidebarHeader>
			<NuxtImg src="./HeaderBackgroundLight.webp" alt="Ruehrstaat Squadron Banner" class="w-64 max-w-64 min-w-64 transition-[height] duration-200" :class="{'h-12': !persistentStore.sidebarOpen, 'h-20': persistentStore.sidebarOpen}"/>
		</SidebarHeader>
		<SidebarContent>
			<SidebarGroup>
				<SidebarGroupContent>
					<NavigationSidebarMenuItem v-for="item in navigationItems" :selected-item="item" />
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
		<SidebarFooter>
			<NavigationSidebarUser />
		</SidebarFooter>
	</Sidebar>
</template>

<script lang="ts" setup>
const navigationItems = navigationMenu();
const persistentStore = usePersistentStore();

</script>

<style lang="scss" scoped></style>
