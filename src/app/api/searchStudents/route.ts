import { NextRequest, NextResponse } from "next/server";
import db from "@/db";
export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const pageNum = +searchParams.get("pageNum")! || 1;
	const pageSize = +searchParams.get("pageSize")! || 2;
	const search = searchParams.get("search")! || "";

	const data = db.data.posts;

	const filterData = search
		? data.filter(item => {
				return (
					item.title.includes(search) || item.content.includes(search)
				);
		  })
		: data;

	const total = filterData.length;
	const startIndex = (pageNum - 1) * pageSize;
	const endIndex = Math.min(startIndex + pageSize, total);
	const list =
		startIndex >= total ? [] : filterData.slice(startIndex, endIndex);
	return NextResponse.json({
		code: 0,
		msg: "查询成功",
		data: {
			total,
			list,
		},
	});
}
