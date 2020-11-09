import React from 'react';
import './App.css';
import Order from './components/Order';
import About from './components/About';
import Nav from './components/Nav';
import SignIn from './components/SignIn';
import Background from './pics/BG_pizza.jpg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from "react-router-dom";

var sectionStyle = {
	color: "white",
	font: 'italic 1.2em "Snell Roundhand"',
	marginTop: "10vh",
	backgroundImage: `url(${Background})`,
	backgroundRepeat: "no-repeat",
	backgroundAttachment: "fixed",
	height: "auto",
	width: "100%",
	backgroundPosition: "center",
	backgroundSize: "cover",
	overflowY: "auto",
	overflow: "hidden"
};

var textStyle = {
	color: "white",
	font: 'italic bold 2em "Snell Roundhand"',
	marginTop: "10vh",
	marginLeft: "10vh",
	width: "40%",
	backgroundColor: "rgba(0, 0, 0, 0.5)",
	padding: "30px",
	paddingRight: "75px",
	borderRadius: "25px",
}

var textStyle2 = {
	color: "white",
	font: 'italic 0.7em "Snell Roundhand"',
	marginTop: "5vh",
	marginLeft: "10vh",
	marginBottom: "10vh",
	height: "500%",
	listStyle: "none",
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center",
	flexDirection: "column",
	textAlign: "justify",
	textJustify: "inter-word",
}

var buttonStyle = {
	border: "0",
	textDecoration: "none",
	backgroundColor: "orange",
	padding: "5px 10px",
	marginTop: "2vh",
	font: 'italic bold 0.7em sans-serif',
	borderRadius: "6px",
}

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
		<div style={textStyle}>
			<h1> Benvenuto ! </h1>
			<ul style={textStyle2}>
				<li>
				Notre chef a confectionné pour vous les meilleures pizzas au feu de bois. Il hérite ce savoir faire de sa Mama qui a séduit l'Italie avec des saveurs des plus incroyables de par leur simplicité et leur authenticité. Si vous cherchez à déguter les vraies saveurs de l'Italie, vous êtes au bon endroit : chez Bellissima !
				</li>
				<li>
					<Link to="/order">
						<button style={buttonStyle}>
						Commander
						</button>
					</Link>
				</li>
				<li style={{marginTop: "2vh"}}>
				Bellissima ! ne vous cache rien ! Découvrez tout sur votre pizzeria préférée et apprenez tout sur l'histoire de nos généreux Pizzaiolo. Entrez dans l'univers Bellissima ! et plongez dans une histoire aussi inspirante qu'émouvante. N'attendez plus et faisons de plus amples connaissances !
				</li>
				<li>
					<Link to="/about">
						<button style={buttonStyle}>
						À propos de nous
						</button>
					</Link>
				</li>
				<li style={{marginTop: "2vh"}}>
				Vous ne faites pas encore partie de notre Famiglia ? N'ayez crainte, nous vous acceuillons les bras ouverts ! Devenez notre Fratello ou notre Sorella et bénéficiez de la livraison gratuite sur vos commandes ! Comme on dit en Italie : famiglia è famiglia.
				</li>
				<li>
					<Link to="/signin">
						<button style={buttonStyle}>
						Rejoindre la Famiglia !
						</button>
					</Link>
				</li>
			</ul>
		</div>
	</div>
	);

export default App;