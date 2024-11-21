import Header from "@/components/Header";
import React from "react";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<Header />
			<div>{children}</div>
		</div>
	);
}
