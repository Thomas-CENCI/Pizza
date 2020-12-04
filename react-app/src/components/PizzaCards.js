import React, { useState, useEffect } from 'react';
import Pizza from './Pizza';
import axios from 'axios';

function PizzaCards({tempPizzas, setPizzas}) {
	const [pizzas, addPizzas] = useState([])

	useEffect(() => {
		axios
			.get("/api/v1/Pizzas")
			.then(response => {
				addPizzas(response.data);
			})
			.catch(err => console.log("Erreur"));
		 // eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);

	return(
		<div>s
			<ul style={{justifyContent: "space-arround", display: "flex", flexDirection: "column", alignItems: "center"}}>
				{pizzas.map(pizza =>
					<li key={pizza.id} style={{listStyle: "none"}}><Pizza pizza={pizza} tempPizzas={tempPizzas} setPizzas={setPizzas}/></li>
				)}
			</ul>
		</div>
	);
}

export default PizzaCards;