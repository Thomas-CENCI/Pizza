import React from 'react';
import {Link} from "react-router-dom";

var pizzaStyle = {
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
	marginRight:'5vh',
	font: 'bold 1.2em sans-serif',
	borderRadius: "4px",
};

function Pizza({pizza, tempPizzas, setPizzas}) {
	console.log("Pizza.tempPizzas :", tempPizzas)

	const addPizza = name => {
		const newPizza = [...tempPizzas, {name}];
		setPizzas(newPizza);
	}

	return(
		<div style={pizzaStyle}>
			<h2 style={{font: 'bold 3em "Snell Roundhand"', marginLeft:"0.5em", color: "orange"}}>{pizza.Nom}  -  {pizza.Prix}€</h2>

			<ul style={{lineHeight: "200%"}}>
				<li style={{font: 'bold 1.5em sans-serif', color: "white", listStyle: "none", textAlign: "center", textDecoration: "underline white", display: "flex", flexDirection: "row", marginLeft: "1em"}}>Base :</li>
				<li style={{font: '1.2em sans-serif', color: "white", listStyle: "none", display: "inline", marginLeft: "1em"}}>{pizza.Base}</li>

				<li style={{font: 'bold 1.5em sans-serif', color: "white", listStyle: "none", textAlign: "center", textDecoration: "underline", display: "flex", flexDirection: "row", marginLeft: "1em"}}>Ingrédients :</li>
				{pizza.Ingredients.map((ingredient) => <li key={ingredient.id} style={{font: '1.2em sans-serif', color: "white", listStyle: "none", display: "inline", marginLeft: "1em"}}>{ingredient.Nom}</li>)}

				<li style={{listStyle: "none", float:"right", marginLeft: "1em"}}>
					<button style={buttonStyle} onClick={()=>addPizza(pizza.Nom)}>
						Ajouter
					</button>
				</li>

			</ul>
		</div>
	)
}

export default Pizza;