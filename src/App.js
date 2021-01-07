import "./App.css";
import Login from "./Login";
import React, { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

//Akshay Sinha: 07-01-2021
const spotify = new SpotifyWebApi();

//we use context api or redux in order to avoid "Prop Drilling"
function App() {
  const [{ user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    //code.. it runs on a condition
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user, //this user in rhs is the user we got
        });
      });

      spotify.getUserPlaylists().then((playlists)=>{
        console.log(playlists)
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        })
      })
      spotify.getPlaylist('4znEQe71gZjumggq9QcLzC')
      .then(response=>{
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response, //this user in rhs is the user we got
        });
      })

    }
  }, []);

  return <div className="app">{token ? <Player spotify={spotify}/> : <Login />}</div>;
}

export default App;

//spotify client id: d2476bb380014b74bd61c0fda85c2c3f
