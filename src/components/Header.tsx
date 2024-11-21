"use client";
import Link from "next/link";
import React from "react";
import "@/app/globals.css";
import { usePathname } from "next/navigation";
import { Button } from "antd";
const links = [
	{
		href: "/performance",
		title: "Performance",
	},
	{
		href: "/realitibity",
		title: "Realitibity",
	},
	{
		href: "/scale",
		title: "Scale",
	},
];
export default function Header() {
	const pathname = usePathname();
	return (
		<div className="flex text-white justify-between container mx-auto mt-2 absolute w-full z-10">
			<Link className="font-bold text-xl" href="/">
				Home
			</Link>



			<div className="flex gap-4">
				{links.map(link => (
					<Link
						className={`${
							pathname == link.href ? "text-red-500" : ""
						}`}
						key={link.href}
						href={link.href}
					>
						{link.title}
					</Link>
				))}
			</div>
		</div>
	);
}
