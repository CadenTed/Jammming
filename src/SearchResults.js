import React from "react";
import TrackList from "./Tracklist";
import styles from "./Styles/SearchResults.module.css";

function SearchResults({track, setTrack}) {

   return (
      <div className={styles.div}>
         <h2>Results</h2>
         <TrackList parent="SearchResults" track={track}/>
      </div>
   )
}

export default SearchResults;