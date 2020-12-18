import React from 'react';

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

function Order({pizza}) {
  return(
    <div style={orderStyle}>
      <h2 style={{font: 'bold 3em "Snell Roundhand"', marginLeft:"0.5em", color: "orange"}}>{order.Client.Nom} {order.Client.Prenom} - [prix à calculer]€</h2>

      <ul style={{lineHeight: "200%"}}>

        <li style={{font: 'bold 1.5em sans-serif', color: "white", listStyle: "none", textAlign: "center", textDecoration: "underline", display: "flex", flexDirection: "row", marginLeft: "1em"}}>Pizzas :</li>
        {pizza.Pizzas.map((pizza) => <li key={pizza.id} style={{font: '1.2em sans-serif', color: "white", listStyle: "none", display: "inline", marginLeft: "1em"}}>{pizza.Nom}</li>)}

      </ul>
    </div>
  )
}

export default Order;