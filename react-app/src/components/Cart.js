import React from 'react';
import CartCards from './CartCards';
import Background from '../pics/BG_pizza5.jpg';
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
  backgroundColor: "green",
  padding: "0.5em 1.9em",
  marginTop: "12vh",
  marginRight: "5vh",
  font: 'bold 1.5em sans-serif',
  borderRadius: "6px",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.3)",
  maxHeight: "2em",
  maxWidth: "15em",
  position: "absolute",
  textAlign: "center",
  right: "5%"
}


function Cart() {
  return(
    <div style={orderStyle}>
      <div className='content' style={contentStyle}>
        <CartCards/>
      </div>
        <button style={buttonStyle} onclick="alert('Commande payée!\nBellissima vous remercie et vous souhaite un buon appetito!')">
          Payer
        </button>
    </div>
  );
}

export default Cart;