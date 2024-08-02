import React from "react";

function SearchBar() {
  return (
    <form>
      <input type="text" id="search-bar" placeholder="Search for a song" />
      <br />
      <button>Search</button>
    </form>
  );
}

export default SearchBar;
