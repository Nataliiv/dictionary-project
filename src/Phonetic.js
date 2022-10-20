import React from "react"; 
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blanck" rel="noopener noreferrer">
        Listen
      </a>
      <h4>{props.phonetic.text}</h4>
    </div>
  ); 
}