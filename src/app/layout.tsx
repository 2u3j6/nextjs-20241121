import React from "react";
import "./globals.css";
import { ADLaM_Display } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
const adlam = ADLaM_Display({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-adlam",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body className={adlam.className}>
				<AntdRegistry>
					<div className="container mx-auto px-12">{children}</div>
				</AntdRegistry>
			</body>
		</html>
	);
}
