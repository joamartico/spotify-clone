import { Avatar, InputBase } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import { useDataLayerValue } from '../DataLayer'
import './Header.css'

const Header = () => {

    const[{user}, dispatch] = useDataLayerValue()


    return (
        <div className='Header'>
            <div className="header__left">
                <Search />
                <InputBase placeholder="Search for Artists or Songs" style={{fontSize: "14px"}}/>
            </div>

            <div className="header__right">
                <Avatar src={user?.images[0].url} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header