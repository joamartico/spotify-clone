import { Home, LibraryMusic, Search } from "@material-ui/icons";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDataLayerValue } from "../DataLayer";
import "./Sidebar.css";

const Sidebar = () => {
	const [{ playlists }, dispatch] = useDataLayerValue();

	return (
		<div className="Sidebar">
			<a href="/">
				<img
					className="sidebar__logo"
					src="/spotifyWhite.png"
					alt="spotify"
				/>
			</a>

			<div className="sidebar__options">
				<NavLink
					to="/home"
					className="sidebar__option"
					activeClassName="sidebar__optionSelected"
				>
					<Home /> <p>Home</p>
				</NavLink>

				<NavLink
					to="/search"
					className="sidebar__option"
					activeClassName="sidebar__optionSelected"
				>
					<Search /> <p>Search</p>
				</NavLink>

				<NavLink
					to="/library"
					className="sidebar__option"
					activeClassName="sidebar__optionSelected"
				>
					<LibraryMusic /> <p>Your Library</p>
				</NavLink>
			</div>
			<br />

			<strong className="sidebar__title">PLAYLISTS</strong>
			<hr />
			<div className="sidebar__playlists">
				{playlists?.items?.map((playlist) => (
					<NavLink
						to={`/playlist/${playlist.id}`}
						className="sidebar__playlist"
						activeStyle={{ color: "#fff" }}
					>
						{playlist.name}
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
