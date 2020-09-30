import { Favorite, MoreHoriz } from "@material-ui/icons";
import React from "react";
import "./SongRow.css";

const SongRow = ({ track }) => {
    
	return (
		<div className="SongRow">
			<div className="songRow__left">
				<img
					className="songRow__image"
					src={track.album.images[0].url}
					alt=""
				/>
				<div className="songRow__info">
					<p className="songRow__name">{track.name}</p>

					<p className="songRow__artists">
						{track.artists.map((artist) => artist.name).join(", ")}
					</p>
				</div>
			</div>

			<div className="songRow__center">
				<p className="songRow__album">{track.album.name}</p>
			</div>

			<div className="songRow__right">
				<Favorite className="songRow__fav"/>
				<MoreHoriz className="songRow__more"/>
			</div>
		</div>
	);
};

export default SongRow;
