
import Card from '../card/Card';
import './Cards.css';

function Cards ({characters, onClose}){
  
  return (
    <div class='Container'>
      {
        characters.map(({id, name, species, gender, image}) =>{
          return <Card 
          key={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          id={id}
          onClose={() => onClose(id)}
          />
        })
      }
    </div>
  )
}

export default Cards;