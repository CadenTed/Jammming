import React from "react";
import styles from "./Styles/SearchBar.module.css"


function SearchBar() {
  return (
    <form className={styles.form}> 
      <input type="text" id="search-bar" placeholder="Search for a song" className={styles.search}/>
      <br />
      <button className={styles.button}>Search</button>
    </form>
  );
}

export default SearchBar;
