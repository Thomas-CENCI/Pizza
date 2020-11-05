import React from 'react';
import image from "../pics/pizza.jpg"

var imageStyle = {
	backgroundImage: `url(${image})`,
	height: "40%",
	width: "80%",
	borderRadius: "15px"
};

var pizzaStyle = {
  border: "2px solid black",
  height: "250px",
  width: "225px",
  background: "radial-gradient(circle, rgba(238,238,238,1) 0%, rgba(137,137,137,1) 100%)",
  borderRadius: "15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: "10px",
  marginLeft: "10px",
  marginRight: "10px",
};

function Pizza({pizza}) {
	console.log(pizza.Ingredients, typeof(pizza.Ingredients))
	return(
	<div style={pizzaStyle}>
		<img src={image} style={imageStyle} alt="pizza" />
		<h2>{pizza.Nom}</h2>
		<h1>{pizza.Prix}€</h1>
		<ul>
			<li style={{listStyle: "none", textAlign: "center", textDecoration: "underline"}}>Ingrédients :</li>
			{pizza.Ingredients.map((ingredient) => <li key={ingredient.id} style={{listStyle: "none", display: "inline"}}>- {ingredient.Nom} </li>)}
		</ul>
	</div>
	)
}

export default Pizza;