"use client";
import React from "react";
import Image from "next/image";
import { data } from "@/data";
import { useRouter } from "next/navigation";

export default function Pages({ params }: { params: { id: string } }) {
	const router = useRouter();
	const obj = data.find(item => item.id === +params.id)!;
  const handlBack = () => {
		router.back();
	};
	return (
		<div
			className="flex inset-0 bg-slate-400/[.7] justify-center items-center fixed"
			onClick={handlBack}
		>
			<Image className="rounded-xl" src={obj.src} width={800} height={800} alt={obj.alt} onClick={(e)=>{e.stopPropagation()}}></Image>
		</div>
	);
}
