import React from 'react';
import './App.css';
import Order from './Order';
import About from './About';
import Nav from './Nav';
import SignIn from './SignIn';
import Background from './pics/BG_pizza.jpg';
import Titre from './Titre';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
  	<Router>
    <div className='app' style={sectionStyle}>
    	<Nav/>
    	<Switch>
    		<Route path='/' exact component={Home} />
    		<Route path='/about' component={About} />
    		<Route path='/order'  component={Order} />
    		<Route path='/signin'  component={SignIn} />
    	</Switch>
    </div>
    </Router>
    );
}

const Home = () => (
	<div style={{color: "white"}}>
		<h1> Home Page </h1>
	</div>
	);

export default App;