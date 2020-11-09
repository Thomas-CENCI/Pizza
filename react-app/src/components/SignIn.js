import React from 'react';
import Background from '../pics/BG_pizza3.jpg';

var signStyle = {
	color: "white",
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

function Signin() {
  return(
    <div style={signStyle}>
    	<h1>Sign in Page</h1>
    </div>
    );
}

export default Signin;