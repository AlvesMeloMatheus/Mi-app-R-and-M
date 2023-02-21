import "./Card.css";
import { Link } from "react-router-dom";

function Card({name, gender, onClose, species, image, id}) {
  return (
    <div className="BoxCharacter">
          
      <h2 className="h2Char">

        <button id="Delete" onClick={onClose}>X</button>
        
        <Link to={`detail/${id}`}>
          <h3 id="CharacterName"> {name} </h3>
        </Link>
        
        <img src={image} alt={name}/>
        
      </h2>

      <div className="SpecificationBox">
        <h3>Specifications:</h3>
        <h5>{gender}</h5>
        <h5>{species}</h5>
      </div>         

    </div>
  )
}

export default Card;