import React, { useState } from "react";

import styles from "./Styles/Playlist.module.css"
import TrackList from "./Tracklist";

function Playlist({playlistTrack, resultsTrack, setResultTrack, setPlaylistTrack}) {

   return (
      <div className={styles.div}>
         <form className={styles.form}>
            <input 
               type="text" 
               id='playlist-name' 
               className={styles.input}
               placeholder="Playlist name"/>
         </form>
         <TrackList 
            parent="Playlist"
            track={playlistTrack} 
            onResultChange={setResultTrack}
            onPlaylistChange={setPlaylistTrack}/>
      </div>
   )
}
export default Playlist;