import React from "react";
import Image from "next/image";
import { data } from "@/data";
export default function page({ params }: { params: { id: string } }) {
	console.log(params);
	const photoObj = data.find(item => item.id === +params.id)!;
	return (
		<div className="justify-center container mx-auto pt-8 flex flex-col">
			<div className="w-full flex justify-center">
				<div className="w-[400px] h-[400px]">
					<Image
						className="w-full"
						width={400}
						height={400}
						alt={photoObj.alt}
						src={photoObj?.src}
					></Image>
				</div>
			</div>
			<div className="w-full border-2 border-dashed border-gray-500 rounded-lg p-4 my-8 leading-8">
				<p>
					<strong>Title:</strong>
					{photoObj.alt}
				</p>
				<p>
					<strong>Price:</strong>
					{photoObj.price}
				</p>
			</div>
		</div>
	);
}
