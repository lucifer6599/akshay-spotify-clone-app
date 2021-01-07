import React from 'react'
import './Body.css'
import Header from './Header'
import { useDataLayerValue } from "./DataLayer";
import  FavoriteIcon  from '@material-ui/icons/FavoriteOutlined';
import  MoreHorizIcon  from '@material-ui/icons/MoreHoriz';
import  PlayCircleFilledIcon  from '@material-ui/icons/PlayCircleFilled';
import SongRow from './SongRow'
// , MoreHoriz, PlayCircleFilled
function Body({spotify}) {
    const[{discover_weekly},dispatch]=useDataLayerValue();
    //Bem convention
    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt=""/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon/>
                </div>
                {/* List of Songs */}
                {discover_weekly?.tracks.items.map(item=>(
                    <SongRow key={item.id} track={item.track}/>
                ))}
            </div>
        </div>
    )
}

export default Body
