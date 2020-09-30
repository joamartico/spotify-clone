export const authEndpoint = "https://accounts.spotify.com/authorize";

//const redirectUri = "http://192.168.0.59:3000/home";
const redirectUri = "https://spotify-clone-289f5.web.app/home";

const clientId = "ab3088c75ba94a3cac6de079c7b80cca";

const scopes = [
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
];

export const getTokenFromUrl = () => {
	return window.location.hash // todo el string que hay a partir del #
		.substring(1) // en un solo string ??
		.split("&") // hasta el &
		.reduce((initial, item) => {
			let parts = item.split("=");
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;
