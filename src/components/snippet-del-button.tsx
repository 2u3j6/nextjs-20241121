'use client'
import { deleteSnippet } from "@/actions";
import React, { startTransition } from "react";

export default function Button(props: Readonly<{ id: number }>) {
    const handlerDelete =async ()=>{
        // 使用startTransition包裹异步函数，避免页面闪烁
        startTransition(async ()=>{
            await deleteSnippet(props.id)
        })
    }
	return <button onClick={handlerDelete} className="border p-2 rounded">Delete</button>;
}
