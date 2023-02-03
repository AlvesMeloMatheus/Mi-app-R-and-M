
import "./Nav.css";
import SearchBar from "../Bar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {
  return (
    <nav>

      <div className="buttonsHA">
        
        <button id="Home">        
          <Link to="home" style={{color: "white"}}>Home</Link>
        </button>

        <button id="About">        
          <Link to="about" style={{color: "white"}}>About</Link>
        </button>
      
      </div>        
      
      <SearchBar onSearch={onSearch} />

    </nav>
  )
}

export default Nav;