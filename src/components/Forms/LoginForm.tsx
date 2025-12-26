"use client";
import { loginSchema, LoginSchemaType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Checkbox } from "../shadcnui/checkbox";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const LoginForm = () => {
	const { handleSubmit, control } = useForm({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
			rememberMe: true,
		},
		mode: "all",
	});

	const loginFormHandler = async (loginData: LoginSchemaType) => {
		console.log(loginData);
	};
	return (
		<form
			onSubmit={handleSubmit(loginFormHandler)}
			className=""
			noValidate>
			<Controller
				name="email"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>Email</FieldLabel>
						<Input
							{...field}
							id={field.name}
							type="email"
							placeholder="john@example.com"
							autoComplete="email"
						/>
						{fieldState.invalid && (
							<FieldError>{fieldState.invalid}</FieldError>
						)}
					</Field>
				)}
			/>

			<Controller
				name="password"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={!!fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>Password</FieldLabel>
						<Input
							{...field}
							id={field.name}
							type="password"
							placeholder="Enter Your Password"
							autoComplete="current-password"
						/>
						{fieldState.error && (
							<FieldError>{fieldState.error.message}</FieldError>
						)}
					</Field>
				)}
			/>

			<Controller
				name="rememberMe"
				control={control}
				render={({ field, fieldState }) => (
					<Field
						data-invalid={!!fieldState.invalid}
						orientation="horizontal">
						<Checkbox
							id={field.name}
							name={field.name}
							checked={field.value}
							onCheckedChange={field.onChange}
						/>

						<FieldLabel htmlFor={field.name}>Remember Me</FieldLabel>

						{fieldState.error && (
							<FieldError>{fieldState.error.message}</FieldError>
						)}
					</Field>
				)}
			/>
		</form>
	);
};

export default LoginForm;
