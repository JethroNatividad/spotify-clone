import NextAuth from "next-auth"
import SpotifyProvider from 'next-auth/providers/spotify'
import { authorizeUrl } from "../../../lib/spotify"

export default NextAuth({
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
            authorization: authorizeUrl
        })
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: '/login'
    },
    callbacks: {

        async jwt({ token, account, user }) {

            // initial sign in
            if (account && user)
                return {
                    ...token,
                    id: account.providerAccountId,
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    accessTokenExpires: account.expires_at * 1000
                }

            // check if accessToken is not expired
            if (Date.now() < token.accessTokenExpires) {
                return token
            }
        },
        async session({ session, token }) {
            // data to be accessible in getSession or useSession
            return {
                ...session,
                user: {
                    ...session.user,
                    accessToken: token.accessToken,
                    refreshToken: token.refreshToken,
                    id: token.id
                }
            }
        }
    }

})