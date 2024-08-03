import React, { useState } from "react";
import Track from "./Track";
import styles from "./Styles/Tracklist.module.css";

function TrackList(props) {

  return (
    <div className={styles.div}>
      <ul className={styles.ul}>
         {props.track.map((t) => (
            <li key={t.id}>
              <Track 
                track={t} 
                buttonSign={props.parent} 
                handleClick={props.handleClick} 
                keyValue={t.id}/>    
            </li>
            ))}
      </ul>
    </div>
  );
}
export default TrackList;
