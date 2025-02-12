<template>
	<div class="flex flex-row justify-center items-center h-dvh">
		<Card class="overflow-hidden max-w-[90%] w-[500px] shadow-lg">
			<div class="relative mb-6">
				<ThemeImage
					dark_src="/HeaderBackgroundDark.webp"
					light_src="/HeaderBackgroundLight.webp"
					class="h-32 w-fit overflow-hidden"
				/>
				<h1
					class="text-3xl font-bold text-start absolute bottom-1 left-28 text-white"
				>
					Rührstaat Squadron
				</h1>
				<ThemeImage
					dark_src="/LogoCleanDark.webp"
					light_src="/LogoCleanLight.webp"
					class="absolute bottom-[-20px] left-4 size-20 border-8 border-card rounded-xl image-rounded bg-card"
				/>
			</div>
			<CardContent>
				<slot />
			</CardContent>
		</Card>
	</div>
	<div class="absolute top-0 right-0 p-4">
		<ThemeModeSelector />
	</div>
	<div class="absolute top-0 left-0 p-4">
		<NuxtLink :to="{ name: 'index' }">
			<Button variant="ghost">
				<LucideArrowLeft :size="15" />
				Zurück zur Startseite
			</Button>
		</NuxtLink>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.image-rounded .theme-image {
	border-radius: var(--radius);
}
</style>
