
import "./SearchBar.css";

import { useState } from "react";

function SearchBar ({onSearch}) {

  const [characters, setCharacters] = useState("");

  const handleChange = (event/*evento del onChange*/) => {
    setCharacters(event.target.value)
    /*event.target --> proporciona el elemento que desencadena mi evento*/
  }
  
  /*-------
  PRIMER TENTATIVA BORRAR INPUT PUESTO:

  const AddButton = document.getElementById("AddButton");
  const Add = document.getElementById("Add");

  AddButton.addEventListener("click", function () {
    Add.value = "";
  });

  --------*/

  return (

      <div>
        
        <input id="Add" type="search" placeholder="Insert a number" value={characters} onChange={handleChange}/*demarca cada cambio del input*//>
        
        <button id="AddButton" onClick={() => onSearch(characters)} >Search</button>
        {/* para pasar parametros a una funcion dentro del onClick, 
        necesito una ->cb<-. ESO ES, para que 
        la funcion no se ejecute sola */}
      
      </div>

  )
}

export default SearchBar;