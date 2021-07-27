import React from 'react';
import "./SidebarOption.css"

function SidebarOption({ Title, Icon}) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon"></Icon>}
            {Icon ? <h4>{Title}</h4> : <p>{Title}</p>}
        </div>
    )
}

export default SidebarOption
