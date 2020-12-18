import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

var contentStyle = {
	color: "white",
	marginTop: "10vh",
  marginLeft: "10vh",
  marginBottom: "10vh",
  width: "75%",
  maxHeight: "150em",
	backgroundColor: "rgba(0, 0, 0, 0.7)",
	padding: "30px",
	paddingRight: "75px",
	borderRadius: "25px",
}

var buttonStyle = {
  border: "0",
  textDecoration: "none",
  backgroundColor: "red",
  padding: "10px 15px",
  marginTop: "10vh",
  marginLeft: "10px",
  marginRight: "20px",
  font: 'bold 1.2em sans-serif',
  borderRadius: "4px",
};

function CartCards({cart, price}) {
	return(
      <div className='pizza-list' style={contentStyle}>
        <h1 style={{font: 'italic bold 4em "Snell Roundhand"', position:"sticky", color: "white", textAlign:"center", marginTop:"10px", marginBottom:"10px"}}>Le résumé de votre commande</h1>
        <ul style={{display:"flex", font:'italic 3.5em "Snell Roundhand"', marginLeft:"30px", marginTop:"50px", flexDirection:"column", justifyContent:"space-around", color:"white"}}>
        	{cart.map((pizza) => {
            return <li style={{lineHeight:"7vh"}}>{pizza.name} - {pizza.price}‎€</li>
          })}
        <li style={{listStyle:"none", textAlign:"center", marginTop:"5vh"}}>Total : {price}€</li>
        <li style={{listStyle: "none", font:"bold 0.35em sans-serif", textAlign:"center", marginLeft: "1em"}}>
          <Link to="/menu">
            <button style={buttonStyle} onClick={()=>
              cart = []
              }>
              Modifier
            </button>
          </Link>
        </li>

        </ul>
      </div>
	);
}

export default CartCards;