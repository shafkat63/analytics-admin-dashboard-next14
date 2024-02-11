import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
	if (request.nextUrl.pathname === "/") {
		//track analytics event
		try {
		} catch (err) {
			console.log(err);
		}
	}
	return NextResponse.next();
}
export const matcher = {
	matcher: ["/"],
};
