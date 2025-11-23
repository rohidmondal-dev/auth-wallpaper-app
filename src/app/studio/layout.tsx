import { ReactNode } from "react";

type StudioLayoutProps = {
	children: ReactNode;
};

const StuduoLayout = ({ children }: Readonly<StudioLayoutProps>) => {
	return <main className="mx-auto max-w-7xl px-6 py-3">{children}</main>;
};

export default StuduoLayout;
