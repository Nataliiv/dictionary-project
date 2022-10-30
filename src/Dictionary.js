import React, { useState } from "react"; 
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
	let [keyword, setKeword] = useState(props.defaultKeyword);
	let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

	function handleDictionaryResponse(response) {
		setResults(response.data[0]);
	}

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

	function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search(){
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    //documantation: https://pexels.com
    let apiPexelsKey =
      "563492ad6f91700001000001b37cf565fd024b2b80be72e07717b0bc";
    let apiPexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${apiPexelsKey}` }
    axios
      .get(apiPexelsUrl, {headers: headers,})
      .then(handlePexelsResponse);
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
              className="form-control search-input"
              placeholder="search for any word"
            />
          </form>
          <small className="hint">i.e. music, wine, yoga, coding</small>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );  
  } else {
    load();
    return null;
  }
}