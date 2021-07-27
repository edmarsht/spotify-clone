import { Description, PlayCircleFilled } from '@material-ui/icons';
import React from 'react';
import "./Body.css";
import Header from "./Header";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDataLayerValue } from './DataLayer';

function Body( { spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt="Discover Weekly"/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>Your weekly mixtape of fresh music. Enjoy and deep cuts picked for you. Updates every Monday.</p>
                    {/* <p>{discover_weekly?.description}</p> */}
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icon">
                    <PlayCircleFilledIcon />
                    <FavoriteIcon />
                    <MoreHorizIcon />
                </div>
            </div>
        </div>
    )
}

export default Body
