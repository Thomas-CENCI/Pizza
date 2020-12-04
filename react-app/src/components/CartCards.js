import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

var cartStyle = {
  border: "2px solid black",
  position: "absolute",
  maxHeight: "50%",
  width: "16%",
  background: "rgba(0, 0, 0, 0.6)",
  borderRadius: "15px",
  marginTop: "18vh",
  marginLeft: "10px",
  marginRight: "10px",
};

var buttonStyle = {
  border: "0",
  textDecoration: "none",
  backgroundColor: "red",
  padding: "10px 15px",
  marginTop: "2vh",
  marginLeft: "10px",
  marginRight: "20px",
  font: 'bold 1.2em sans-serif',
  borderRadius: "4px",
};

function CartCards({cart}) {
  console.log(cart)
	return(
      <div className='pizza-list' style={cartStyle}>
        <h1 style={{font: 'bold 1.5em sans-serif', position:"sticky", color: "white", textAlign:"center", marginTop:"10px", marginBottom:"10px"}}>Le résumé de votre commande</h1>
        <ul style={{display:"flex", flexDirection:"column", justifyContent:"space-around", textAlign:"center", listStyle:"none", color:"white"}}>
        	{cart.map((pizza) => {
            return <li>{pizza.name}</li>
          })}

        <li style={{listStyle: "none", float:"right", marginLeft: "1em"}}>
          <Link to="/">
            <button style={buttonStyle} onClick={()=>
              alert('Commande annulée.\nA bientôt!')
              }>
              Annuler
            </button>
          </Link>
        </li>

        </ul>
      </div>
	);
}

export default CartCards;