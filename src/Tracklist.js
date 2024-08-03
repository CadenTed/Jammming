import React, { useState } from "react";
import Track from "./Track";
import styles from "./Styles/Tracklist.module.css";

function TrackList({parent}) {
  const [track, setTrack] = useState([
   {
      title: "Song",
      artist: "Artist",
      album: "Album",
      id: 0
   },
   {
      title: "Song",
      artist: "Artist",
      album: "Album",
      id: 1
   },
   {
      title: "Song",
      artist: "Artist",
      album: "Album",
      id: 2
   }
]);

   console.log(track[0].id);

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
