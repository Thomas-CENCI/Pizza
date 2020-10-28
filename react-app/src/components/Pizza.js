import React from 'react';
import image from "../pics/pizza.jpg"

var imageStyle = {
	backgroundImage: `url(${image})`,
	height: "112.5px",
	width: "168.75px",
	borderRadius: "15px"
};

var pizzaStyle = {
  border: "2px solid black",
  height: "250px",
  width: "225px",
  background: "rgb(249, 235, 205)",
  borderRadius: "15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: "10px"
}

function Pizza({name, price}) {
	return(
	<div style={pizzaStyle}>
		<img src={image} style={imageStyle} alt="pizza" />
		<h2>{name}</h2>
		<h1>{price}</h1>
		<p>Ingredient 1; Ingredient 2; Ingredient 3</p>
	</div>
	);
}

export default Pizza;