import React from "react";
import TrackList from "./Tracklist";
import styles from "./Styles/SearchResults.module.css";

function SearchResults({
  playlistTrack,
  resultsTrack,
  setResultTrack,
  setPlaylistTrack,
}) {
  const handleClick = (keyValue) => {

    let trackToAdd;
    resultsTrack.forEach((element) => {
      if (element.id === keyValue) {
        trackToAdd = element;
      }
    });
    setPlaylistTrack((prev) => [...prev, trackToAdd]);
    setResultTrack((prev) =>
      resultsTrack.filter((track) => track.id !== keyValue)
    );
  };

  return (
    <div className={styles.div}>
      <h2>Results</h2>
      <TrackList
        parent="SearchResults"
        track={resultsTrack}
        onResultChange={setResultTrack}
        onPlaylistChange={setPlaylistTrack}
        handleClick={handleClick}
      />
    </div>
  );
}

export default SearchResults;
