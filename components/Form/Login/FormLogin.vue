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
		<div class="flex flex-row justify-end mt-3">
			<Button type="submit">Login</Button>
		</div>
	</form>
</template>

<script lang="ts" setup>
import { toast } from "vue-sonner";
import { z } from "zod";

const { $api } = useNuxtApp();
const router = useRouter();
const session = useSession();

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
	const response = await $api.auth.login(values);
	if (response) {
		session.setSession(response);
		toast.success("Login success");
		router.replace({ name: "index" });
	}
});
</script>

<style lang="scss" scoped></style>
