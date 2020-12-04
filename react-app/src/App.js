import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import About from './components/About';
import Nav from './components/Nav';
import SignIn from './components/SignIn';
import Cart from './components/Cart';
import Home from './components/Home';
import {BrowserRouter as Router, BrowserRouter, Route} from 'react-router-dom';

function App() {
  const [tempPizzas, setPizzas] = useState([]);

  return(
  	<Router>
	    <div className='app'>
	    	<BrowserRouter>
				<Nav/>
	    		<Route path='/' exact component={Home} />
	    		<Route path='/about' component={About} />
	    		<Route path='/menu'>
	    			<Menu tempPizzas={tempPizzas} setPizzas={setPizzas}/>
	    		</Route>
	    		<Route path='/signin'  component={SignIn} />
	    		<Route path='/cart'  component={Cart} />
	    	</BrowserRouter>
	    </div>
	</Router>
    );
}

export default App;