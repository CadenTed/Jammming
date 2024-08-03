import React from "react";
import styles from "./Styles/Track.module.css";

function Track({track}) {
   return (
      <div className={styles.div}>
         <h4>{track.title}</h4>
         <button className={styles.button}>+</button>
         <p>{track.artist} | {track.album}</p>
      </div>
   )
}

export default Track;