import React from "react";
import styles from "./Styles/Track.module.css";

function Track({track, buttonSign, handleClick, keyValue}) {

   const sign = buttonSign === "PlayList" ? "-" : "+"

   return (
      <div className={styles.div}>
         <h4>{track.title}</h4>
         <button onClick={() => handleClick(keyValue)} className={styles.button}>{sign}</button>
         <p>{track.artist} | {track.album}</p>
      </div>
   )
}

export default Track;