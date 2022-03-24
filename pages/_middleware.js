import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"


export default async function(req) {

    const jwt = await getToken({ req, secret: process.env.JWT_SECRET })
    console.log("JWT MIDDLEWARE >", jwt)
    console.log(req.nextUrl)
    const { pathname, origin } = req.nextUrl

    if (pathname === "/login" && jwt) {
        return NextResponse.redirect(origin + "/")
    }

    if (pathname.includes("api/auth/") || jwt) {
        console.log("continue")
        return NextResponse.next()
    }

    if (!jwt && pathname !== "/login") {
        console.log("NO JWT")
        return NextResponse.redirect(origin + "/login")
    }

}