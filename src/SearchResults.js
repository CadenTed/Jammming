import React from "react";
import TrackList from "./Tracklist";
import styles from "./Styles/SearchResults.module.css";

function SearchResults({playlistTrack, resultsTrack: resultsTracks, setResultTrack, setPlaylistTrack}) {

   const handleClick = (keyValue) => {

      let trackToAdd;
      console.log(resultsTracks)
      for (let tracks in resultsTracks) {
         console.log("tracks: "+tracks)
         console.log("id: "+tracks.id)
         console.log("value: "+keyValue)
         if (tracks.id === keyValue) {
            trackToAdd = tracks;
         }
      }

      setResultTrack(prev => resultsTracks.filter(track => track.id !== keyValue))

      if (trackToAdd) {
         setPlaylistTrack(prev => [...prev, trackToAdd]);
      }
   }
   

   return (
      <div className={styles.div}>
         <h2>Results</h2>
         <TrackList 
            parent="SearchResults"
            track={resultsTracks} 
            onResultChange={setResultTrack}
            onPlaylistChange={setPlaylistTrack}
            handleClick={handleClick}/>
      </div>
   )
}

export default SearchResults;