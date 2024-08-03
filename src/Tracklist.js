import React, { useState } from "react";
import Track from "./Track";
import styles from "./Styles/Tracklist.module.css";

function TrackList() {
  const [track, setTrack] = useState({});

  const tracks = [
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
  ]

  const newTrack = {
    
  };

  return (
    <div className={styles.div}>
      <ul className={styles.ul}>
         {tracks.map((track) => (<Track track={track} />))}
      </ul>
    </div>
  );
}

export default TrackList;
