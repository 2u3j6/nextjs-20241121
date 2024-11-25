import { NextResponse } from "next/server";
import db from "@/db";
export async function POST(request: Request) {
	const data = await request.json();
    await db.update(({ posts }) =>{
        const index = posts.findIndex((item) => item.id === data.id);
        posts.splice(index, 1);
    })
    return NextResponse.json({
		code:0,
		msg:'删除成功'
	});

	

	
}