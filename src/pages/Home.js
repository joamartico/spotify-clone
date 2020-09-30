import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "../DataLayer";
import "./Home.css";

const Home = () => {
    const [{ playlists }, dispatch] = useDataLayerValue();
    const [homePlaylists, setHomePlaylists] = useState()
    useEffect(()=> {
        setHomePlaylists(playlists.items)
    }, [])


	return (
		<div className="Home">
            {
                
                //GRAPHQL PARA HACER UNA PETICION DE $ OBJETOS A UN ARRAY DE 20 OBJETOS
            }
		</div>
	);
};

export default Home;
