import { NextRequest, NextResponse } from "next/server";
import { analytics } from "./utils/analytics";

export default async function middleware(request: NextRequest) {
	if (request.nextUrl.pathname === "/") {
		//track analytics event
        try {
            analytics.track('pageview', {
              page: '/',
              country: request.geo?.country,
            })
          } catch (err) {
            // fail silently to not affect request
            console.error(err)
          }
        }
      
        return NextResponse.next()
      }
      
      export const matcher = {
        matcher: ['/'],
      }