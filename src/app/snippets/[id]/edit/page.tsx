import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";
import SnippetEditor from '@/components/snippet-editor'
export default async function Page({ params }: { params: { id: string } }) {
    const id = +params.id;
    if(isNaN(id))return notFound()
    const snippet = await db.user.findFirst({
        where: {
            id,
        },
    }) as {id: number; title: string; code: string}
	console.log(snippet);

	return <div>
        <SnippetEditor snippetCode={snippet?.code} snippetId={snippet.id}/>
    </div>;
}
