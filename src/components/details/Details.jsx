import "./Details.css"

import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {

  const { detailsId } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailsId}`)
    .then((response) => response.json())
    .then((char) => {
      if (char.name) {
        setCharacter(char);
      } else {
        window.alert("There are no characters with that id");
      }
    })
    .catch((err) => {
      window.alert("There are no characters with that id");
    });
  return setCharacter({});
}, [detailsId]);

  return (
    <div className="Detail">
      <h1>{character?.name}</h1>
      <p>{character?.status}</p>
      <p>{character?.species}</p>
      <p>{character?.gender}</p>
      <p>{character?.origin?.name}</p>
      <img src={character?.image} alt="" />
    </div>
  )
}

export default Details;