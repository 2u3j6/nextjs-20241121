import { NextResponse } from "next/server";
import db from "@/db";
export async function POST(request: Request) {
	const data = await request.json();
    await db.update(({ posts }) =>{
        posts = posts.map(item=>{
            if(item.id === data.id){
                item.title = data?.title
                item.content! = data?.content
                return item
            }else{
                return item
            }
        })
        return posts
    })
    return NextResponse.json({
		code:0,
		msg:'修改成功'
	});

	

	
}