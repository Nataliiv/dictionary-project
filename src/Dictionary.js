import React, { useState } from "react"; 
import "./Dictionary.css";

export default function Dictionary() {
	let [keyword, setKeword] = useState("");
	function search(event) {
		event.preventDefault();
		alert(`${keyword}`);
	}

	function handleSearch(event) {
		setKeword(event.target.value);
	}

  return (
		<div className="Dictionary">
			<form onSubmit={search}>
				<input type="search" onChange={handleSearch} />
			</form>
		</div>
	)  
}