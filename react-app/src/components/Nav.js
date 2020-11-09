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
};

var navLinks = {
  width: "30%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  listStyle: "none",
  textAlign: "right",
  position: "right"
}

var buttonStyle = {
  border: "0",
  textDecoration: "none",
  color: "white",
  backgroundColor: "rgb(113, 119, 122)",
  padding: "7px 12px",
  marginTop: "2vh",
  font: 'bold 1.5em sans-serif',
  borderRadius: "6px",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.3)",
}

function Nav() {
  return(
    <nav style={navStyle}>
      <div style={{display: "flex"}}>
      	<Link to="/">
      		<Logo/>
      	</Link>
        <Link to="/" style={{textDecoration: "none"}}>
          <Titre text="Bellissima !" color="linear-gradient(90deg, rgba(5,110,45,1) 15%, rgba(255,255,255,1) 40%, rgba(180,8,8,1) 85%)"/>
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
          <Link style={{color: "white"}} to="/order">
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
		  </ul>
    </nav>
    );
}

export default Nav;