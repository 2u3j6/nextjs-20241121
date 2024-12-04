import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
// import DelSnippetButton from "@/components/snippet-del-button";
import { deleteSnippet } from "@/actions";
// const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default async function Page(props: { params: { id: string } }) {
	// await sleep(3000) 测试loading
	// nextjs15获取动态路由参数需要(await params).id
	console.log(props.params.id);
	const snippet = await db.user.findFirst({
		where: {
			id: Number(props.params.id),
		},
	});

	if (!snippet) {
		// return <div>Not Found...</div>;
		return notFound(); //找最近的notFound页面
	}

	const deleteSnippetWithId = deleteSnippet.bind(null, snippet.id);
	return (
		<div>
			<div className="mt-4 flex justify-between">
				<h1>{snippet?.title}</h1>
				<div className="flex gap-3">
					<Link
						className="border p-2 rounded"
						href={`/snippets/${snippet.id}/edit`}
					>
						Edit
					</Link>
					{/* <DelSnippetButton id={snippet.id} /> */}
					{/* 方式二 通过form表单 加server action*/}
					<form action={deleteSnippetWithId}>
						<button className="border p-2 rounded">Delete</button>
					</form>
				</div>
			</div>
			<pre className="p-3 border border-teal-500 bg-gray-200 mt-6">
				<code>{snippet?.code}</code>
			</pre>
		</div>
	);
}
