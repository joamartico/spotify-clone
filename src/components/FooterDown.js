import { Home, LibraryMusic, Search } from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import "./FooterDown.css";

const FooterDown = () => {
	return (
		<div className="FooterDown">
			<NavLink
				to="/home"
				className="footerDown__option"
				activeStyle={{ color: "white" }}
			>
				<Home fontSize="large" />
				Home
			</NavLink>

			<NavLink
				to="/search"
				className="footerDown__option"
				activeStyle={{ color: "white" }}
			>
				<Search fontSize="large" />
				Search
			</NavLink>

			<NavLink
				to="/library"
				className="footerDown__option"
				activeStyle={{ color: "white" }}
			>
				<LibraryMusic fontSize="large" />
				Your Library
			</NavLink>
		</div>
	);
};

export default FooterDown;
