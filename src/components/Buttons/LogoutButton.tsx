"use client";

import { authClient } from "@/lib/auth-client";
import { LoaderIcon, LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../shadcnui/button";

const LogoutButton = () => {
	const [isLoding, setIsloding] = useState(false);

	const { push } = useRouter();

	const logoutHandeler = async () => {
		setIsloding(true);

		const { data } = await authClient.signOut();

		await new Promise<void>((r) => setTimeout(r, 1000));

		if (data) {
			console.log("Logout Successfull");

			push("/auth");
		} else {
			console.error("Something went wrong");
		}

		setIsloding(false);
	};

	return (
		<Button
			variant={"destructive"}
			onClick={logoutHandeler}
			type="button"
			className="cursor-pointer"
			disabled={isLoding}>
			{isLoding ? (
				<>
					<LoaderIcon className="animate-spin" /> Logging Out
				</>
			) : (
				<>
					<LogOutIcon /> Logout
				</>
			)}
		</Button>
	);
};

export default LogoutButton;
