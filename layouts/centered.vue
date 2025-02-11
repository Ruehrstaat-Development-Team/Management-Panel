<template>
	<div class="flex flex-row justify-center items-center h-dvh">
		<Card class="overflow-hidden max-w-[90%] w-[500px]">
			<ThemeImage
				dark_src="/HeaderBackgroundDark.webp"
				light_src="/HeaderBackgroundLight.webp"
				class="max-h-32 w-fit overflow-hidden"
			/>
			<CardContent>
				<slot />
			</CardContent>
		</Card>
	</div>
	<div class="absolute top-0 right-0 p-4">
		<ThemeModeSelector />
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
