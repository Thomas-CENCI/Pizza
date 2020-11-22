import React, {Component} from 'react';
import Order from './Order'

class CartCards extends Component {
	constructor() {
		super();
		this.state = {
			commandes: []
		}
	}

	componentDidMount() {
		fetch('/api/v1/Commandes')
			.then(res => (res.json()))
			.then(commandes => this.setState({commandes}, () => console.log('Commandes fetched', commandes)));
	}

	render() {
		return(
				<div>
					<ul style={{justiifyContent: "space-arround", display: "flex", flexDirection: "column", alignItems: "center"}}>
						{this.state.commandes.map(commande =>
							<li key={commande.id} style={{listStyle: "none"}}><Order order={commande}/></li>
						)}
					</ul>
				</div>
			);
	}
}

export default CartCards;