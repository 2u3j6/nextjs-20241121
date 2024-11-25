import { NextResponse } from "next/server";
import db from "@/db";
export async function POST(request: Request) {
	
	const data = await request.json();
	await db.update(({ posts }) => posts.unshift({
		id:Math.random().toString(36).substring(2),
		...data
	}))
	return NextResponse.json({
		code:0,
		data,
		msg:'添加成功'
	});
	
}
