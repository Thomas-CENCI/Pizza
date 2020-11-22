import React from 'react';
import PizzaCards from './PizzaCards';
import Background from '../pics/BG_pizza4.jpg';
import {Link} from "react-router-dom";

var contentStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100%",
  justifyContent: "space-around",
  marginLeft: "30px",
  marginTop: "50em",
};

var orderStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
  overflowY: "scroll",
  overflowX: "hidden",
  display: "flex",
  }

var buttonStyle = {
  border: "0",
  textDecoration: "none",
  color: "black",
  backgroundColor: "orange",
  padding: "0.4em 1.5em",
  marginTop: "2vh",
  marginLeft: "2vh",
  font: 'bold 1.5em sans-serif',
  borderRadius: "6px",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.3)",
  maxHeight: "2em",
  maxWidth: "15em",
}

var cartStyle = {
  border: "2px solid black",
  position: "absolute",
  maxHeight: "50%",
  width: "17%",
  background: "rgba(0, 0, 0, 0.6)",
  borderRadius: "15px",
  marginTop: "18vh",
  marginLeft: "10px",
  marginRight: "10px",
  }


function Pizzas() {
  return(
    <div style={orderStyle}>

      <div className='content' style={contentStyle}>
        <PizzaCards/>
      </div>

      <Link style={{color: "white", position:"absolute", marginTop:"10vh"}} to="/cart">
        <button style={buttonStyle}>
          Valider la commande
        </button>
      </Link>

      <div style={cartStyle}>
        <h1 style={{font: 'bold 1.5em sans-serif', position:"sticky", color: "white", textAlign:"center", marginTop:"10px", marginBottom:"10px"}}>Votre commande</h1>
      </div>

    </div>
  );
}

export default Pizzas;