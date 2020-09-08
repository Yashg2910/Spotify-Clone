import React, { useEffect } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";


const spotify = new SpotifyWebApi();

function App() {
  
  const [{user, token}, dispatch] = useDataLayerValue();

  // Run code based on a given condition..
  useEffect(()=> {
    // code...
    const hash = getTokenFromUrl();
    window.location.hash="";

    // Access token
    const _token = hash.access_token;
    
    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
          dispatch({
            type: 'SET_USER',
            user: user,
          });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('3Bqfa2KVKxklF0UiWTI35G').then((response) => {
        // console.log("RESPONSE>>>>>", response);
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        });
      });

      

    }
  }, []);

  // console.log("USER>>>>", user);
  // console.log("TOKEN>>>>", token);
  return (
    <div className="app">
      {/* Spotify Logo */}
      {/* Login wiht Spotify Button */}
      {
        token ? (
          <Player spotify={spotify} />
        ):(
          <Login/>
        )
      }
      
    </div>
  );
}

export default App;
