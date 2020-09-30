import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDataLayerValue } from "../DataLayer";
import "./Library.css";

const Library = ({ spotify }) => {
	return (
		<div className="Library">
			<h1>Música</h1>

			<div className="library__options">
				<NavLink
					to="/library/playlists"
					activeClassName="library__optionSelected"
					className="library__option"
				>
					Playlists
				</NavLink>

				<NavLink
					to="/library/artists"
					activeClassName="library__optionSelected"
					className="library__option"
				>
					Artists
				</NavLink>
				
				<NavLink
					to="/library/albums"
					activeClassName="library__optionSelected"
					className="library__option"
				>
					Albums
				</NavLink>
			</div>
		</div>
	);
};

export default Library;
