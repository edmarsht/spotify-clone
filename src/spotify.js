export const authEndpoint =
"https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "a4d914ac7e914e6da0a088e37d52fa79";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];