import React from 'react';
import {Link} from "react-router-dom";

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

var buttonStyle = {
	border: "0",
	textDecoration: "none",
	backgroundColor: "orange",
	padding: "10px 15px",
	marginTop: "2vh",
	font: 'bold 1em sans-serif',
	borderRadius: "4px",
};

/** Make a pop-up button for Ingredients : https://fr.w3docs.com/snippets/css/comment-creer-une-forme-popup-avec-css-et-javascript.html */
function Pizza({pizza}) {
	return(
	<div style={pizzaStyle}>
		<h2 style={{font: 'bold 2em sans-serif', position: "sticky"}}>{pizza.Nom}</h2>
		<h1 style={{font: 'bold 3em sans-serif', position: "sticky"}}>{pizza.Prix}€</h1>
		<ul>
			<li style={{listStyle: "none", textAlign: "center", textDecoration: "underline", display: "flex", flexDirection: "column"}}>Ingrédients :</li>
			{pizza.Ingredients.map((ingredient) => <li key={ingredient.id} style={{listStyle: "none", display: "inline", display: "flex"}}>- {ingredient.Nom} </li>)}
			<li style={{listStyle: "none", alignItems: "center", display: "flex", justifyContent: "space-around"}}>
				<Link to="/order">
					<button style={buttonStyle}>
					Ajouter
					</button>
				</Link>
			</li>
		</ul>
	</div>
	)
}

export default Pizza;