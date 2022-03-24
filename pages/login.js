import React from 'react'
import { getProviders, signIn } from "next-auth/react"

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: { providers }
    }
}

const login = ({ providers }) => {
    const { spotify } = providers
    return (
        <div className='min-h-screen flex justify-center items-center bg-black'>
            <button className='p-2 text-white hover:bg-green-600 transition-colors active:scale-95 rounded-2xl bg-green-700' onClick={ () => signIn(spotify.id) }>Sign in with Spotify</button>
        </div>
    )
}

export default login