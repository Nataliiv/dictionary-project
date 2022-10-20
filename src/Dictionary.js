import React, { useState } from "react"; 
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
	let [keyword, setKeword] = useState(props.defaultKeyword);
	let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

	function handleResponse(response) {
		setResults(response.data[0]);
	}

	function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search(){
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

	function handleSearch(event) {
		setKeword(event.target.value);
	}

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleSearch}
              class="form-control search-input"
              placeholder="search for any word"
            />
          </form>
          <small className="hint">i.e. music, wine, yoga, coding</small>
        </section>
        <Results results={results} />
      </div>
    );  
  } else {
    load();
    return null;
  }
}