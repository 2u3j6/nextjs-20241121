import { db } from "@/db";
import React from "react";
import {redirect} from 'next/navigation'

export default function Page() {
	async function createSnippet(formData: FormData) {
		"use server";
		const title = formData.get("title") as string;
		const code = formData.get("code") as string;

		await db.user.create({
			data: {
				title,
				code,
			},
		});
        redirect("/") //服务端组件跳转使用redirect跳转   
	}
	return (
		<form className="mx-auto" action={createSnippet}>
			<h3 className="text-center">Create a Snippet</h3>
			<div className="flex gap-4 mt-4">
				<label className="w-12" htmlFor="title">
					Title
				</label>
				<input
					name="title"
					className="border border-teal-500 rounded w-full"
					type="text"
					id="title"
				></input>
			</div>

			<div className="flex gap-4 mt-4">
				<label className="w-12" htmlFor="code">
					Code
				</label>
				<input
					name="code"
					className="border border-teal-500 rounded w-full"
					type="text"
					id="code"
				></input>
			</div>
			<button
				className="rounded p-2 bg-blue-300 w-full mt-4"
				type="submit"
			>
				Create
			</button>
		</form>
	);
}
