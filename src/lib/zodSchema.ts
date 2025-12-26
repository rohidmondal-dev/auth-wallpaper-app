import z from "zod";

export const loginSchema = z.object({
	email: z.email("Invalid email"),
	password: z.string().min(8, "Password should be 8 charecters or more"),
	rememberMe: z.boolean(),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

export const registerSchema = z
	.object({
		name: z.string().min(6, { error: "Name must be at least 2 characters" }),
		email: z.email("Invalid email"),
		password: z.string().min(8, "Password should be 8 charecters or more"),
		confirmPassword: z
			.string()
			.min(8, "Confrim Password should be 8 charecters or more"),
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		error: "Password didn't match",
	});

export type RegisterSchemaType = z.infer<typeof registerSchema>;
