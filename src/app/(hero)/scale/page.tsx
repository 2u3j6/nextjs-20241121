import React from "react";
import wallSrc from "/public/wall.png";
import Content from "@/components/content";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Scale",
};
export default function Page() {
	return (
		<div className="text-white">
			<div className="absolute inset-0">
				<Content imgUrl={wallSrc} />
			</div>
		</div>
	);
}
