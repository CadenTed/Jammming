import React, { useState } from "react";

import styles from "./Styles/Playlist.module.css";
import TrackList from "./Tracklist";

function Playlist({
  playlistTrack,
  resultsTrack,
  setResultTrack,
  setPlaylistTrack,
}) {
  const handleClick = (keyValue) => {
    let trackToAdd;
    playlistTrack.forEach((element) => {
      if (element.id === keyValue) {
        trackToAdd = element;
      }
    });
    setResultTrack((prev) => [...prev, trackToAdd]);
    setPlaylistTrack((prev) =>
      playlistTrack.filter((track) => track.id !== keyValue)
    );
  };

  return (
    <div className={styles.div}>
      <form className={styles.form}>
        <input
          type="text"
          id="playlist-name"
          className={styles.input}
          placeholder="Playlist name"
        />
      </form>
      <TrackList
        parent="Playlist"
        track={playlistTrack}
        onResultChange={setResultTrack}
        onPlaylistChange={setPlaylistTrack}
        handleClick={handleClick}
      />
    </div>
  );
}
export default Playlist;
