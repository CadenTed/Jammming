import './App.css';
import Playlist from './Playlist';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function App() {
  return (
    <>
      <header>
        <h1>Jamming</h1>
      </header>
      <SearchBar />
      <SearchResults />
      <Playlist />
    </>
  );
}

export default App;
