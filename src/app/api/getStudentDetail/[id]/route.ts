import { NextResponse } from "next/server";
import db from "@/db";
export async function GET(request: Request,{params}:{params:{id:string}}) {
    const item = db.data.posts.find((item) => item.id === params.id);
    return NextResponse.json({
		code:0,
        msg:'查询成功',
		data:item
	});

	

	
}