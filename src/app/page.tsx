import { db } from "@/db";
import Link from "next/link";

export default async function page() {
	const snippets = await db.user.findMany();

	return (
		<>
			<div className="bg-white flex justify-between items-center mt-10">
				<h1 className="font-bold text-lg">Snippets</h1>
				<Link
					className="p-2 border rounded border-teal-500"
					href="/snippets/new"
				>
					New
				</Link>
			</div>
			{snippets.map(snippet => {
				return (
					<>
						<Link key={snippet.id}
							href={`/snippets/${snippet.id}`}
							className="flex justify-between items-center border border-teal-500 rounded p-3 my-2"
						>
							<span>{snippet.title}</span>
							<span>view</span>
						</Link>
					</>
				);
			})}
		</>
	);
}
