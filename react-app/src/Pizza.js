import React from 'react';
import "./App.css";
import image from "./pics/pizza.jpg"

var imageStyle = {
	backgroundImage: `url(${image})`,
	height: "112.5px",
	width: "168.75px",
	borderRadius: "15px"
};

function Pizza({name, price}) {
	return(
	<div className="pizza">
		<img src={image} style={imageStyle} alt="pizza" />
		<h2>{name}</h2>
		<h1>{price}</h1>
		<p>Ingredient 1; Ingredient 2; Ingredient 3</p>
	</div>
	);
}

export default Pizza;