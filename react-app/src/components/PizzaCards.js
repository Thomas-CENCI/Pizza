import React, {Component} from 'react';
import Pizza from './Pizza'

class PizzaCards extends Component {
	constructor() {
		super();
		this.state = {
			pizzas: []
		}
	}

	componentDidMount() {
		fetch('/api/v1/Pizzas')
			.then(res => (res.json()))
			.then(pizzas => this.setState({pizzas}, () => console.log('Pizzas fetched', pizzas)));
	}

	render() {
		return(
				<ul style={{justiifyContent: "space-arround", display: "flex", alignItems: "center"}}>
					{this.state.pizzas.map(pizza =>
						<li key={pizza.id} style={{listStyle: "none"}}><Pizza pizza={pizza}/></li>
					)}
				</ul>
			);
	}
}

export default PizzaCards;