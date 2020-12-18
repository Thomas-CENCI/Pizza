import React from 'react';
import CartCards from './CartCards';
import Background from '../pics/BG_pizza5.jpg';
import { useLocation, Link } from "react-router-dom";
import axios from 'axios';

var contentStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  marginLeft: "30px",
  marginTop: "10em",
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
};

var buttonStyle = {
  border: "0",
  textDecoration: "none",
  color: "black",
  backgroundColor: "green",
  padding: "0.5em 1.9em",
  marginTop: "12vh",
  marginRight: "5vh",
  font: 'bold 1.5em sans-serif',
  borderRadius: "6px",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.3)",
  maxHeight: "2em",
  maxWidth: "15em",
  position: "absolute",
  textAlign: "center",
  right: "5%"
};

function Paye(pizza_ids) {

  if (pizza_ids.length != 0) {
    axios ({
      method: 'post',
      url: 'api/v1/createClient',
      data: {
        Nom: "Dupont",
        Prenom: "Jean",
      }
    }).then(response => {
      axios ({
        method: 'post',
        url: 'api/v1/createCommande',
        data: {
          Pizzas: pizza_ids,
          Client: response.data._id,
        }
      })
    })

    alert('Commande payée!\nBellissima vous remercie et vous souhaite un buon appetito!')}
  
    else {
      alert('Attention !\nVote panier est vide.')
    }
    
}

function Cart() {
  var cart = []
  const tempPizzas = useLocation().state
  let pizza_ids = []
  let price = 0
  if (!(tempPizzas)) {
    const tempPizzas = []
  }

  if(tempPizzas) {
    cart = tempPizzas.tempPizzas.tempPizzas
    pizza_ids = tempPizzas.tempPizzas.tempPizzas.map(element => element.id);
    tempPizzas.tempPizzas.tempPizzas.forEach(element => price += element.price)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  console.log("Prix", price)

  return(
    <div style={orderStyle}>
      <div className='content' style={contentStyle}>
        <CartCards cart={cart} price={price}/>
      </div>
        <Link to="/">
          <button style={buttonStyle} onClick={()=>Paye(pizza_ids)}>
            Payer
          </button>
        </Link>
    </div>
  );
}

export default Cart;