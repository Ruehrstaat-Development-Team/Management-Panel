<template>
  <div class="flex flex-row items-center gap-3">
				<div
					class="flex items-center justify-center bg-primary text-primary-foreground rounded-sm p-1 size-7 align-middle"
				>
					<LucideUser :size="16" />
				</div>
				<span
					class="flex-grow flex flex-col justify-center items-start"
				>
					<span class="leading-none whitespace-nowrap">{{
						user?.nickname
					}}</span>
					<span class="text-xs text-muted-foreground">{{ user?.email }}</span>
				</span>
        <slot/>
			</div>
</template>

<script lang="ts" setup>
defineProps({
	user: Object as PropType<User>,
});
</script>

<style lang="scss" scoped>

</style>