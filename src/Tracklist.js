import React, { useState } from "react";
import Track from "./Track";
import styles from "./Styles/Tracklist.module.css";

function TrackList({parent, track}) {
  const handleClick = ({target}) => {
      console.log(target)
  }

  return (
    <div className={styles.div}>
      <ul className={styles.ul}>
         {track.map((t, index) => (
            <li key={t.id}><Track track={t} buttonSign={parent} handleClick={handleClick} /></li>
            
            ))}
      </ul>
    </div>
  );
}
export default TrackList;
