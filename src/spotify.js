// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

// Authetication/ Authorization URL
export const authEndPoint = "https://accounts.spotify.com/authorize";

// Redirect URL
const redirectUri = "https://spotify-clone-ycode.netlify.app/";

// Spotify client Id
const clientId = "6ef110b9c0b74fb593e816a2e27894f5";

// setting user permissions
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// Pulling access token from URI
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item)=> {
        // access token = mysupersecretkey&name=yash
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

