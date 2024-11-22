import React from "react";
import "./globals.css";
import { ADLaM_Display } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Link from "next/link";
const adlam = ADLaM_Display({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-adlam",
});

export default function RootLayout({
	team,
	analytics,
	children,
}: Readonly<{
	team: React.ReactNode;
	analytics: React.ReactNode;
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body className={adlam.className}>
				<AntdRegistry>
					<div className="container mx-auto">
						<div className="flex justify-center text-blue-400 p-6 gap-6">
							<Link href="/">Home</Link>
							<Link href="/visitors">Visitors</Link>
						</div>

						<div>
							<div className="flex gap-6">
								{team}
								{analytics}
							</div>
							{children}
						</div>
					</div>
				</AntdRegistry>
			</body>
		</html>
	);
}
