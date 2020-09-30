import React from 'react'
import { Link } from 'react-router-dom';
import { useDataLayerValue } from '../DataLayer';
import './Playlists.css'

const Playlists = () => {
    const [{ playlists }, dispatch] = useDataLayerValue();

	// const [playlists, setPlaylists] = useState([])

	// useEffect(() => {
	// 	spotify.getUserPlaylists().then((res) => {
	// 		setPlaylists(res)
	// 	});
	// }, [])

    console.log("PLAYLISTS:   ", playlists.items);
    
    
    return (
        <div className='Playlists'>
				{playlists?.items?.map((playlist) => (
					<Link to={`/playlist/${playlist.id}`} className="playlists__playlist">
						<img
							className="playlists__playlistImg"
							src={playlist.images[0].url}
							alt=""
						/>
                        
						<div className="playlists__playlistInfo">
							<p className="playlists__playlistTitle">
								{playlist.name}
							</p>

							<p className="playlists__playlistUser">
								por {playlist.owner.display_name}
							</p>
						</div>
					</Link>
				))}
        </div>
    )
}

export default Playlists