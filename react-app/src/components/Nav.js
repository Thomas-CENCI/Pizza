import React from 'react';
import Logo from './Logo';
import Titre from './Titre';
import {Link} from "react-router-dom";


var navStyle = {
  display: "flex",
  alignItems: "center",
  minHeight: "10vh",
  maxHeight: "50px",
  background: "linear-gradient(90deg, rgba(73, 79, 82, 1) 0%, rgba(32, 32, 32,1) 100%)",
  color: "white",
  position: "fixed",
  top: "0",
  width: "100%",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.3)",
  justifyContent: "space-between",
  zIndex:'99'
};

var navLinks = {
  maxWidth: "70%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  listStyle: "none",
  textAlign: "right",
  position: "right",
  marginRight: "2em",
  position: "sticky"
}

var buttonStyle = {
  border: "0",
  textDecoration: "none",
  color: "white",
  backgroundColor: "rgb(113, 119, 122)",
  padding: "0.4em 1em",
  marginTop: "2vh",
  marginRight: "2vh",
  font: 'bold 1.5em sans-serif',
  borderRadius: "6px",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.3)",
  maxHeight: "2em",
  maxWidth: "10em"
}

function Nav() {
  return(
    <nav style={navStyle}>
      <div style={{display: "flex"}}>
      	<Link to="/">
      		<Logo/>
      	</Link>
        <Link to="/" style={{textDecoration: "none"}}>
          <Titre text="Bellissima!" color="orange"/>
        </Link>
      </div>
		  <ul className="nav-links" style={navLinks}>
  			<li>
  				<Link style={{color: "white"}} to="/about">
            <button style={buttonStyle}>
              À propos
            </button>
          </Link>
  			</li>
        <li>
          <Link style={{color: "white"}} to="/menu">
            <button style={buttonStyle}>
              Commander
            </button>
          </Link>
        </li>
        <li>
          <Link style={{color: "white"}} to="/signin">
            <button style={buttonStyle}>
              Se connecter
            </button>
          </Link>
        </li>
        <li>
          <Link style={{color: "white"}} to="/cart">
            <button style={buttonStyle}>
              Panier
            </button>
          </Link>
        </li>
		  </ul>
    </nav>
    );
}

export default Nav;