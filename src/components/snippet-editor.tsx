"use client";
import { editSnippet } from "@/actions";
import Editor from "@monaco-editor/react";
import React from "react";
export default function Page({
	snippetCode,
	snippetId: id,
}: {
	snippetCode: string;
	snippetId: number;
}) {
	const [code, setCode] = React.useState(snippetCode);
	const handleChange = (code: string = "") => {
		console.log(code);
		setCode(code);
	};

	const editSnippetWithIdAndCode = editSnippet.bind(null, id, code);

	return (
		<>
			<Editor
				height="40vh"
				theme="vs-dark"
				language="javascript"
				options={{
					minimap: {
						enabled: false,
					},
				}}
				defaultValue={snippetCode}
				onChange={handleChange}
			/>
			<form action={editSnippetWithIdAndCode}>
				<div className="flex justify-center items-center">
					<button className="border p-2 mt-3">
						save
					</button>
				</div>
			</form>
		</>
	);
}
