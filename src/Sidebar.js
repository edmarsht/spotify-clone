import React, { useState } from 'react'
import "./Sidebar.css"
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import TocIcon from '@material-ui/icons/Toc';
import { useDataLayerValue } from "./DataLayer";


function Sidebar() {
    const [{ playlists}, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
        <img
            className="sidebar__logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=""
        />
        <SidebarOption Icon={HomeIcon} Title="Home" />        
        <SidebarOption Icon={SearchIcon} Title="Search" />        
        <SidebarOption Icon={TocIcon} Title="Your library" />  

        <br />
        <strong className="sidebar__title">PLAYLISTS</strong>    
        <hr />  

        {playlists?.items?.map((playlist) => (
        <SidebarOption Title={playlist.name} />
      ))}
      </div>
    )
}

export default Sidebar
