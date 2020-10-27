import React from 'react';
import Pizza from './Pizza';
import './App.css';

var orderStyle = {
  color: "white",
};

var contentStyle = {
  display: "flex",
  minHeight: "100vh",
  width: "60%",
  justifyContent: "space-around",
  marginLeft: "30px",
  marginTop: "100px"
}

function Order() {
  return(
        <div className='content' style={contentStyle}>
        	<h1 style={orderStyle}> La selection de la mama :</h1>
        	<div>
    			<Pizza name='Regina' price='10$'/>
    			<Pizza name='Nordique' price='15$'/>
    		</div>
    		<div>
    			<Pizza name='Savoyarde' price='16$'/>
    			<Pizza name='Kebab' price='12$'/>
    		</div>
    		<div>
    			<Pizza name='Hawaïenne' price='13$'/>
    			<Pizza name='Vegan' price='14$'/>
    		</div>
    	</div>
    );
}

export default Order;