import React, { useState } from "react";

import styles from "./Styles/Playlist.module.css"
import TrackList from "./Tracklist";

function Playlist() {
   const [tracks, setTracks] = useState([])



   return (
      <div className={styles.div}>
         <form className={styles.form}>
            <input type="text" id='playlist-name' className={styles.input}/>
         </form>
         <TrackList parent="PlayList"/>
      </div>
   )
}
export default Playlist;