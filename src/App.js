import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import Player from "./pages/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Search from "./pages/Search";
import { Hidden } from "@material-ui/core";
import Playlists from "./components/Playlists";
import Header from "./components/Header";
import FooterTop from "./components/FooterTop";
import FooterDown from "./components/FooterDown";
import "./index.css";


const spotify = new SpotifyWebApi();


function App() {
	const [{ user, token }, dispatch] = useDataLayerValue();

	useEffect(() => {
		var tokenInStorage = localStorage.getItem("token");

		if (tokenInStorage) {
			spotify.setAccessToken(tokenInStorage);

			spotify.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					user,
				});
			});

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: "SET_PLAYLISTS",
					playlists,
				});
			});
		}
	}, []);

	if (user) {
		return (
			<div className="App">
			<Router>
				<Hidden smDown>
					<Sidebar />
					<Header spotify={spotify} />
				</Hidden>

				<Route path="/playlist/:pid">
					<Player spotify={spotify} />
				</Route>

				<Route exact path="/home" >
					<Home />
				</Route>

				<Route path="/library">
					<Library spotify={spotify} />
				</Route>

				<Route exact path="/library">
					<Redirect to="/library/playlists" />
				</Route>

				<Route exact path="/library/playlists">
					<Playlists />
				</Route>

				<Route exact path="/library/artists">
					<Playlists />
				</Route>

				<Route exact path="/library/albums">
					<Playlists />
				</Route>

				<Route exact path="/search">
					<Search />
				</Route>

				<FooterTop />

				<Hidden mdUp>
					<FooterDown />
				</Hidden>

				<Redirect to="/home" />
			</Router>
			</div>
		);
	} else {
		return <Login />;
	}
}

export default App;

// function App() {

// 	const [{ user, token }, dispatch] = useDataLayerValue();
// 	var tokenInStorage = localStorage.getItem("token");
// 	console.log("the token is: ", tokenInStorage)

// 	if (tokenInStorage) {
// 		console.log("HAY UN TOKEN EN EL STORAGE");

// 		spotify.setAccessToken(tokenInStorage);

// 		spotify.getMe().then((user) => {
// 			console.log("the user is: ", user);
// 			dispatch({
// 				type: "SET_USER",
// 				user,
// 			});
// 		});

// 		spotify.getUserPlaylists().then((playlists) => {
// 			dispatch({
// 				type: "SET_PLAYLISTS",
// 				playlists,
// 			});
// 		});

// 		spotify.getPlaylist("7kNBdlxglD5g4z39PRxRlj").then((response) => {
// 			dispatch({
// 				type: "SET_DISCOVER_WEEKLY",
// 				discover_weekly: response,
// 			});
// 		});

// 		return <Player spotify={spotify} />;
// 	} else {
// 		return <Login />;
// 	}
// }

// export default App;
