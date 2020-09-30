import { Grid, Hidden, Slider } from "@material-ui/core";
import {
	Home,
	LibraryMusic,
	PlayArrow,
	PlayCircleOutline,
	PlaylistPlay,
	Repeat,
	Search,
	Shuffle,
	SkipNext,
	SkipPrevious,
	VolumeDown,
} from "@material-ui/icons";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./FooterTop.css";

const Footer = () => {
	return (
		<div className="FooterTop">
			<div className="footerTop__left">
				<img
					className="footerTop__albumLogo"
					src=""
					alt=""
				/>

				<div className="footerTop__songInfo">
					<p className="footerTop__songTitle">Una vela</p>
					<p className="footerTop__songArtist">Intoxicados</p>
				</div>
			</div>

			<div className="footerTop__center">
				<Hidden smDown>
					<Shuffle className="footerTop__iconGreen" />
					<SkipPrevious className="footerTop__icon" />
				</Hidden>

				<PlayArrow
					className="footerTop__icon footerTop__play"
					fontSize="large"
				/>

				<Hidden smDown>
					<SkipNext className="footerTop__icon" />
					<Repeat className="footerTop__iconGreen" />
				</Hidden>
			</div>

			<div className="footerTop__right">
				<Hidden smDown>
					<PlaylistPlay />

					<VolumeDown />

					<Slider />
				</Hidden>
			</div>
		</div>
	);
};

export default Footer;
