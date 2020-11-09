import React from 'react';
import Background from '../pics/BG_pizza2.jpg';


var aboutStyle = {
	color: "black",
	marginTop: "10vh",
  	backgroundImage: `url(${Background})`,
	backgroundRepeat: "no-repeat",
	backgroundAttachment: "fixed",
	height: "100%",
	width: "100%",
	backgroundPosition: "center",
	backgroundSize: "cover",
	overflowY: "scroll",
	overflow: "hidden"
};

function About() {
  return(
    <div style={aboutStyle}>
    	<h1>About Page</h1>
    </div>
    );
}

export default About;