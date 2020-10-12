import React from 'react';
import Pizza from './Pizza';
import Background from './pics/BG_pizza.jpg';
import Logo from './Logo';
import Titre from './Titre';

var sectionStyle = {
backgroundImage: `url(${Background})`,
height: "100%",
width: "100%",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
backgroundSize: "cover",
};

function App() {
  return(
    <div className='app' style={sectionStyle}>
    	<div className="title">
			<Logo />
	        <Titre text='Pizz' color='green' />
	        <Titre text='à' color='white' />
	        <Titre text='gogo' color='red' />
        </div>     
        <div className='content'>
        	<div>
    			<Pizza name='Regina' price='10$'/>
    			<Pizza name='Nordique' price='15$'/>
    			<Pizza name='Savoyarde' price='16$'/>
    		</div>
    		<div>
    			<Pizza name='Kebab' price='12$'/>
    			<Pizza name='Hawaïenne' price='13$'/>
    			<Pizza name='Vegan' price='14$'/>
    		</div>
    	</div>
    </div>
    );
}

export default App;