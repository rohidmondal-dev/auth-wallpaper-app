import { Button } from "../shadcnui/button";

const LogoutButton = () => {
	return (
		<Button
			variant={"destructive"}
			type="button"
			className="cursor-pointer">
			Logout
		</Button>
	);
};

export default LogoutButton;
