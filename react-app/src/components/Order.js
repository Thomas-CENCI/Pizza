import React from 'react';
import PizzaCards from './PizzaCards';
import Background from '../pics/BG_pizza4.jpg';

var textStyle = {
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-arround",
  marginTop: "10vh",
  position: "fixed"
};

var contentStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100%",
  justifyContent: "space-around",
  marginLeft: "30px",
  marginTop: "10vh",  
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
  overflowX: "scroll",
}


/** NEED TO MAKE A GRID FOR THE CARDS : https://developer.mozilla.org/fr/docs/Web/CSS/grid */
function Order() {
  return(
    <div style={orderStyle}>
      <header style={textStyle}>
        <h1>Notre sélection :</h1>
      </header>
      <div className='content' style={contentStyle}>
        <PizzaCards/>
    	</div>
    </div>
  );
}

export default Order;