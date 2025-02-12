<template>
	<div class="flex flex-col space-y-4">
		<div class="w-full flex flex-row justify-center">
			<Tabs v-model="selectedTab">
				<TabsList>
					<TabsTrigger value="login" class="w-32">Login</TabsTrigger>
					<TabsTrigger value="register" class="w-32"
						>Register</TabsTrigger
					>
				</TabsList>
			</Tabs>
		</div>

		<FormLogin v-if="selectedTab === 'login'" />
    <FormLoginRegister v-else-if="selectedTab === 'register'" />
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: "centered",
	title: "Login | Rührstaat Squadron",
	description: "Login to your Rührstaat Squadron account",
});

const selectedTab = ref("login");
</script>

<style lang="scss" scoped></style>
