import React, { useState } from 'react';
import PizzaCards from './PizzaCards';
import Background from '../pics/BG_pizza4.jpg';
import { useLocation, Link } from "react-router-dom";

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
  maxHeight: "100%",
  width: "16%",
  background: "rgba(0, 0, 0, 0.6)",
  borderRadius: "15px",
  marginTop: "18vh",
  marginLeft: "10px",
  marginRight: "10px",
  position: 'fixed'
};

function TempCart({pizza, index, removePizza}) {
  return(
    <div className='pizza' style={{color:"white", marginLeft:"10px", marginBottom:"10px", display:"flex", flexDirection:"row", justifyContent:'space-around'}}>
    {pizza.name}
    <div>
      <button onClick={() => removePizza(index)} style={{borderRadius:"6px", width: "2em", heigth:"5em", backgroundColor:"red", textDecoration:"none", textAlign:"center"}}>X</button>
    </div>
    </div>
  )
};

function Menu({tempPizzas, setPizzas}) {

  const removePizza = index => {
    const newPizzas = [...tempPizzas];
    newPizzas.splice(index, 1);
    setPizzas(newPizzas);
  }

  return(
     <div className='app' style={orderStyle}>

      <div className='content' style={contentStyle}>
        <PizzaCards tempPizzas={tempPizzas} setPizzas={setPizzas}/>
      </div>

      <Link style={{color: "white", position:"absolute", marginTop:"10vh", position:"fixed"}} to={{pathname:"/cart", state:{tempPizzas: {tempPizzas}}}}>
        <button style={buttonStyle}>
          Valider la commande
        </button>
      </Link>

      <div className='pizza-list' style={cartStyle}>
        <h1 style={{font: 'bold 1.5em sans-serif', position:"sticky", color: "white", textAlign:"center", marginTop:"10px", marginBottom:"10px"}}>Votre commande</h1>
        {tempPizzas.map((pizza, index) => (
         <TempCart key={index} index={index} pizza={pizza} removePizza={removePizza}/>
        ))}
      </div>

    </div>
  );
}

export default Menu;