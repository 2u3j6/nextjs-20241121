import React from "react";
import { Card } from "antd";
import { data } from "@/data";

interface IParams { params: { id: string } }
export async function generateMetadata({params}:IParams) {
	return {
        title:`博客详情-${params.id}`
    }
}
export default function page({ params }:IParams ) {
    const obj = data.find((item) => item.id == +params.id);
	return (
		<Card
			title={obj?.title}
			extra={<a href="#">返回</a>}
		>
			<p>{obj?.body}</p>
		</Card>
	);
}
