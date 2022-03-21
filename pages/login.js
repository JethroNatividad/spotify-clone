import React from 'react'
import { getProviders, signIn, signOut, useSession } from "next-auth/react"

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: { providers }
    }
}

const login = ({ providers }) => {
    const { spotify } = providers
    const { data: session } = useSession()
    console.log(providers)
    console.log("SESSION FRONT >", session)
    if (session) {
        return (
            <>
                Signed in as { session.user.name } <br />
                <button onClick={ () => signOut() }>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={ () => signIn(spotify.id) }>Sign in with spotify</button>
        </>
    )
}

export default login