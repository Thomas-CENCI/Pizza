import React from 'react';
import {Link} from "react-router-dom";

var orderStyle = {
  border: "2px solid black",
  height: "20em",
  width: "60em",
  background: "rgba(0, 0, 0, 0.6)",
  borderRadius: "15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  marginTop: "15px",
  marginLeft: "10px",
  marginRight: "10px",
};

var buttonStyle = {
  border: "0",
  textDecoration: "none",
  backgroundColor: "orange",
  padding: "10px 15px",
  marginTop: "2vh",
  font: 'bold 1.2em sans-serif',
  borderRadius: "4px",
};

var buttonStyle2 = {
  border: "0",
  textDecoration: "none",
  backgroundColor: "red",
  padding: "10px 15px",
  marginTop: "2vh",
  marginLeft: "10px",
  marginRight: "10px",
  font: 'bold 1.2em sans-serif',
  borderRadius: "4px",
};

function supprimer() {
  console.log("test")
};

/** Make the button "Ajouter" add the pizza to a new Commande */
function Order({order, prix}) {
  return(
    <div style={orderStyle}>
      <h2 style={{font: 'bold 3em "Snell Roundhand"', marginLeft:"0.5em", color: "orange"}}>{order.Client.Nom} {order.Client.Prenom} - 22€</h2>

      <ul style={{lineHeight: "200%"}}>

        <li style={{font: 'bold 1.5em sans-serif', color: "white", listStyle: "none", textAlign: "center", textDecoration: "underline", display: "flex", flexDirection: "row", marginLeft: "1em"}}>Pizzas :</li>
        {order.Pizzas.map((pizza) => <li key={pizza.id} style={{font: '1.2em sans-serif', color: "white", listStyle: "none", display: "inline", marginLeft: "1em"}}>{pizza.Nom}</li>)}

        <li style={{listStyle: "none", float:"right", marginLeft: "1em"}}>
          <button style={buttonStyle2} onClick="supprimer()">
            Supprimer
          </button>
        </li>

      </ul>
    </div>
  )
}

export default Order;