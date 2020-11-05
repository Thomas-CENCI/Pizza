import React from 'react';
import './App.css';
import Order from './components/Order';
import About from './components/About';
import Nav from './components/Nav';
import SignIn from './components/SignIn';
import Background from './pics/BG_pizza.jpg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

var sectionStyle = {
	color: "white",
	marginTop: "10vh",
	backgroundImage: `url(${Background})`,
	backgroundRepeat: "no-repeat",
	backgroundAttachment: "fixed",
	height: "100%",
	width: "100%",
	backgroundPosition: "center",
	backgroundSize: "cover",
	overflowY: "scroll"
};

function App() {
  return(
  	<Router>
    <div className='app'>
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
	<div style={sectionStyle}>
		<h1> Home Page </h1>
	</div>
	);

export default App;