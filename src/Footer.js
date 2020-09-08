import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { Grid, Slider } from '@material-ui/core';
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo"
                src="https://images.theconversation.com/files/258026/original/file-20190208-174861-nms2kt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
                 alt="album cover"></img>
                <div className="footer__songInfo">
                    <h4>Album</h4>
                    <p>Artist</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleOutlineIcon className="large footer__icon"/>
                <SkipNextIcon className="footer__icon"/>
                <RepeatIcon className="footer__green"/>
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs> 
                        <Slider className="MuiSlider__root"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
