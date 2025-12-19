import RegisterForm from "@/components/Forms/RegisterForm";
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
	title: " Register| Auth Wallpaper App",
	description: " Register page of Wallpaper App",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card>
				<CardHeader className="w-xs">
					<CardTitle className="text-center text-2xl font-semibold">
						Join Us🖐
					</CardTitle>
				</CardHeader>

				<CardContent>
					<RegisterForm />
				</CardContent>

				<CardFooter className="gap-1 text-center">
					Already have an account?{" "}
					<Link
						className="underline"
						href={"/auth"}>
						Login
					</Link>{" "}
					now
				</CardFooter>
			</Card>
		</section>
	);
};

export default page;
