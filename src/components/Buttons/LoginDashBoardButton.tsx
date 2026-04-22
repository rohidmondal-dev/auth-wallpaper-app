"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { Button } from "../shadcnui/button";

const LoginDashBoardButton = () => {
	const { data } = authClient.useSession();
	if (data) {
		return (
			<Button render={<Link href={"/studio"}>Dashboard</Link>}>
				
			</Button>
		);
	}
	return (
		<Button render={<Link href={"/auth"}>Login</Link>}>
			
		</Button>
	);
};

export default LoginDashBoardButton;
