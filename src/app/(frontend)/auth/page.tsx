import LoginForm from "@/components/Forms/LoginForm";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Login | Auth Wallpaper App",
	description: "Login page of Wallpaper App",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card>
				<CardHeader className="w-xs">
					<CardTitle className="text-center text-2xl font-semibold">
						Welcome Back🖐
					</CardTitle>
				</CardHeader>

				<CardContent>
					<LoginForm />
				</CardContent>

				<CardFooter className="gap-1 text-center">
					Don&apos;t have an account?{" "}
					<Link
						className="underline"
						href={"/auth/register"}>
						Register
					</Link>{" "}
					now
				</CardFooter>
			</Card>
		</section>
	);
};

export default page;
