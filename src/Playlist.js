import React from "react";

import styles from "./Styles/Playlist.module.css"
import TrackList from "./Tracklist";

function Playlist() {
   return (
      <div className={styles.div}>
         <form className={styles.form}>
            <input type="text" id='playlist-name' className={styles.input}/>
         </form>
         <TrackList />
      </div>
   )
}
export default Playlist;