import React from 'react';
import Logo from './Logo';
import Titre from './Titre';
import {Link} from "react-router-dom";

var navStyle = {
  display: "flex",
  alignItems: "center",
  minHeight: "10vh",
  maxHeight: "50px",
  backgroundColor: "rgb(73, 79, 82)",
  color: "white",
};

var navLinks = {
  width: "30%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  listStyle: "none",
  textAlign: "right"
}

function Nav() {
  return(
    <nav style={navStyle}>
    	<Link to="/">
    		<Logo/>
    	</Link>
      <Link to="/">
        <Titre text="Pizz'à Gogo !" color="white" />
      </Link>
		<ul className="nav-links" style={navLinks}>
			<Link style={{color: "white"}} to="/about">
				<li>A propos</li>
			</Link>
			<Link style={{color: "white"}} to="/order">
				<li>Commander</li>
			</Link>
			<Link style={{color: "white"}} to="/signin">
				<li>Se connecter</li>
			</Link>
		</ul>
    </nav>
    );
}

export default Nav;