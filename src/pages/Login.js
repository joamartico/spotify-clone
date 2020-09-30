import { Home } from "@material-ui/icons";
import React, { useEffect } from "react";
import { getTokenFromUrl, loginUrl } from "../spotify";
import "./Login.css";
import Player from "./Player";


const Login = () => {
		const hash = getTokenFromUrl();

		window.location.hash = "";
		const _token = hash.access_token;
		if (_token) {
			localStorage.setItem("token", _token);
			return(<Home />)
		}



	return (
		<div className="login">
			<img
				src="/spotifyWhite.png"
				alt="spotify"
			/>
			<a href={loginUrl}>LOGIN WITH SPOTIFY</a>
		</div>
	);
};

export default Login;
