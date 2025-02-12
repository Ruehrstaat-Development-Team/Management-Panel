<template>
	<NavigationSidebarUserLoggedOut v-if="!user" />
	<NavigationSidebarUserLoggedIn v-else :user="user" />
</template>

<script lang="ts" setup>


const { $api } = useNuxtApp();
const session = useSession();
const user = ref<User>();

if(session.token) {
	$api.user.getMe().then((usr) => {
		user.value = usr;
	});
}
else{
	user.value = undefined;
}
</script>

<style lang="scss" scoped></style>
