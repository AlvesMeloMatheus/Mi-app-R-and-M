
import './App.css';

import Cards from './components/cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/about/About';
import Details from './components/details/Details';

import { useState } from 'react';
import { Routes, Route} from "react-router-dom";


/*-----------ROUTE
<Route path="lo que quieramos" 
-->caseSensitive: defino que la ruta debe ser minuscula<-- 
element={<lo que estoy renderizando/>}
-----------*/

/*---------------LINK
<Link to="donde voy enviar">
 texto que sea 
<Link/>
-----------------*/

/*-------------NAVLINK
En navLink podemos agregar estilos

{isActive}--> detecta si esta activo o no

<NavLink to="/profile" 
style={ ({ isActive }) => isActive ? {backgroundColor: "red"} : {backgroundColor:"pink"}}>
 texto que quiera <NavLink>
--------------*/

/*--------------------OUTLET
Lo renderizamos en el padre
<Outlet/>
----------------------*/

/*-------------------------useLocation

es un objeto

{useLocation}
---------------------------*/

/*--------------------------useNavigator

es una funcion con dos parametros
(to, options)

{useNavigator}

----------------------------*/

/*-----useParams

{useParams}

muestra la informacion puesta por el usuario 

-------*/



function App() {

  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    /*uso el -->fetch<--, pero es Back-end*/
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
      
      /*--->logre que no se repita<---*/

      const char = characters?.find(e => e.id === data.id)
      /*.find:----> El método find() devuelve el primer elemento
      de la matriz proporcionada que satisface la función de prueba proporcionada.
      Si ningún valor satisface la función de prueba, se devuelve undefined.*/
      
      console.log("el find", char);
      if (char) {
        alert("Already in the list")
      }

      else if (data.id !== undefined) {
        setCharacters(oldChar => [...oldChar, data]);
      }

      else {
        alert("Character not found");
      }
    });
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  return (

      <div className='App'>
  
        <div className="Titulo" style={{padding:'25px'}}>
          
          <h1>Rick and Morthy</h1>
          
  
        </div>
  
        <Nav id="Search" onSearch={onSearch}/>        

        <Routes>
          <Route path='home' element={<Cards className="List" onClose={onClose} characters={characters}/>} />          
          <Route path='about' element={<About/>} />
          <Route path='details/:detailsId' element={<Details/>} />
        </Routes>
  
      </div>

    );
  }

export default App;