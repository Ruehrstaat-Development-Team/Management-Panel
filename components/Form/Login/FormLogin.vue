<template>
	<form @submit="onSubmit">
		<FormField v-slot="{ componentField }" name="email">
			<FormItem>
				<FormLabel>Email</FormLabel>
				<FormMessage />
				<FormControl>
					<Input
						type="email"
						placeholder="Email"
						v-bind="componentField"
					/>
				</FormControl>
			</FormItem>
		</FormField>
		<FormField v-slot="{ componentField }" name="password">
			<FormItem>
				<FormLabel>Password</FormLabel>
				<FormMessage />
				<FormControl>
					<Input
						type="password"
						placeholder="Password"
						v-bind="componentField"
					/>
				</FormControl>
			</FormItem>
		</FormField>
		<div class="flex flex-row justify-end mt-3 gap-2">
			<Button type="button" class="bg-[#5865f2] hover:bg-[#4650c0]" @click="loginWithDiscord()"><Icon name="rst:discord"/>Login with Discord</Button>
			<Button type="submit">Login</Button>
		</div>
	</form>
</template>

<script lang="ts" setup>
import { toast } from "vue-sonner";
import { z } from "zod";

const router = useRouter();
const session = useSessionStore();
const store = useUserStore();
const { $api } = useNuxtApp();
const auth = authRepository($api);
const user = userRepository($api);

const formSchema = toTypedSchema(
	z.object({
		email: z.string().email(),
		password: z.string().min(8),
		otp: z.string().optional().nullable().default(null),
	})
);

const form = useForm({
	validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
	try {
		var response = await auth.login(values);
		if (response) {
			session.setSession(response);
			await setUser();
			toast.success("Login success");
			router.replace({ name: "index" });
		}
	} catch (e) {
		toast.error("Login failed");
	}
});

const loginWithDiscord = async () => {
	try{
		var response = await auth.beginDiscordLogin("http://localhost:3000/auth/callbacks/discord");
		if(response && response.url){
			window.open(response.url, "_self");
		}
	}
	catch(e){
		toast.error("Login failed");
	}
}

async function setUser() {
	const usr = await user.getMe();
	store.setUser(usr);
}
</script>

<style lang="scss" scoped></style>
