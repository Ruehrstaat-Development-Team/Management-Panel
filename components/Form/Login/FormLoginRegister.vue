<template>
	<form @submit="onSubmit">
		<FormField v-slot="{ componentField }" name="nickname">
			<FormItem>
				<FormLabel>Nickname</FormLabel>
				<FormMessage />
				<FormControl>
					<Input
						type="text"
						placeholder="Nickname"
						v-bind="componentField"
					/>
				</FormControl>
			</FormItem>
		</FormField>
		<FormField v-slot="{ componentField }" name="cmdrname">
			<FormItem>
				<FormLabel>CMDR Name</FormLabel>
				<FormMessage />
				<FormControl>
					<Input
						type="text"
						placeholder="CMDR Name"
						v-bind="componentField"
					/>
				</FormControl>
			</FormItem>
		</FormField>
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

const formSchema = toTypedSchema(
	z.object({
    nickname: z.string().min(3),
    cmdrname: z.string().min(3),
		email: z.string().email(),
		password: z.string().min(8),
	})
);

const form = useForm({
	validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
	useFetch("http://localhost:8000/v1/auth/register", {
		method: "POST",
		body: JSON.stringify(values),
		headers: {
			"Content-Type": "application/json",
		},
		onResponse: (response) => {
			console.log(response);
			toast.success("Login successful");
		},
		onResponseError: (error) => {
			console.error(error);
			toast.error("Login failed");
		},
	});
});
</script>

<style lang="scss" scoped></style>
