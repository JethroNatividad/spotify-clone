import SpotifyWebApi from "spotify-web-api-node"

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
})

const scopes = [
    'user-read-email',
    'playlist-read-private',
    'playlist-read-collaborative',
    'streaming',
    'user-read-private',
    'user-library-read',
    'user-top-read',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-follow-read',
].join(',')

const queryParamsString = new URLSearchParams({ scopes }).toString()

export const authorizeUrl = `https://accounts.spotify.com/authorize?${queryParamsString}`

export default spotifyApi