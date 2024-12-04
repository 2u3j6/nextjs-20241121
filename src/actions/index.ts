"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function deleteSnippet(id: number) {
	await db.user.delete({
		where: {
			id: id,
		},
	});
	redirect("/");
}

export async function editSnippet(id: number, code: string) {
	await db.user.update({
		where: {
			id,
		},
		data: {
			code,
		},
	});
	redirect("/snippets/" + id);
}
