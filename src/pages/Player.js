import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongRow from "../components/SongRow";
import Header from "../components/Header";

import "./Player.css";
import Home from "./Home";
import { useDataLayerValue } from "../DataLayer";
import {
	Avatar,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core";

const Player = ({ spotify }) => {
	const [{ user }, dispatch] = useDataLayerValue();

	const [playlist, setPlaylist] = useState();
	const { pid } = useParams();

	useEffect(() => {
		if (pid == undefined) {
			return <Home />;
		}
		spotify.getPlaylist(pid).then((res) => {
			setPlaylist(res);
		});
		console.log("playlist", playlist);
	}, [pid]);

	return (
		<div className="Player">
			<div className="player__info">
				<img src={playlist?.images[0].url} alt="image" />

				<div className="player__infoText">
					<strong>PLAYLIST</strong>

					<h2 className="player__playlistName">{playlist?.name}</h2>

					<p className="player__playlistDescription">
						{playlist?.description}
					</p>

					<div className="player__playlistUser">
						<Avatar src={user?.images[0].url} sizes="10x10"/>
						<strong>{user?.display_name}</strong>
					</div>
				</div>
			</div>

			<div className="player__icons">
				<PlayCircleFilled className="player__shuffle" />
				{/* <Favorite fontSize="large"/> */}
				<MoreHoriz className="player__more" />
			</div>

			<div className="player__songs">
				{playlist?.tracks.items.map((song) => (
					<SongRow track={song.track} />
				))}
			</div>
		</div>
	);
};

export default Player;
