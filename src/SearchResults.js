import React from "react";
import TrackList from "./Tracklist";
import styles from "./Styles/SearchResults.module.css";

function SearchResults() {

   return (
      <div className={styles.div}>
         <h2>Results</h2>
         <TrackList parent="SearchResults"/>
      </div>
   )
}

export default SearchResults;