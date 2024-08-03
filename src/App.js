import './Styles/App.css';
import Playlist from './Playlist';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import React, {useState} from 'react';


function App() {
  const [resultTrack, setResultTrack] = useState([
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

 const [playlistTrack, setPlaylistTrack] = useState([])

  return (
    <>
      <header>
        <h1>Jamming</h1>
      </header>
      <SearchBar />
      <SearchResults track={resultTrack} setTrack={setResultTrack}/>
      <Playlist track={playlistTrack} setTrack={setPlaylistTrack}/>
      <button>Save to Spotify</button>
    </>
  );
}

export default App;
