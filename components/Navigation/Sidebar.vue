<template>
	<Sidebar collapsible="icon">
		<SidebarHeader> </SidebarHeader>
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

</script>

<style lang="scss" scoped></style>
