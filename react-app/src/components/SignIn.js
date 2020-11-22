import React from 'react';
import Background from '../pics/BG_pizza3.jpg';

var signStyle = {
	color: "white",
	marginTop: "10vh",
	backgroundImage: `url(${Background})`,
	backgroundRepeat: "no-repeat",
	backgroundAttachment: "fixed",
	height: "90%",
	width: "100%",
	backgroundPosition: "center",
	backgroundSize: "cover",
	display: "flex",
	flexDirection: "column",
	alignItems: 'center',
	overflowY: "hidden",
	overflow:"hidden"
};

var buttonStyle = {
	border: "0",
	textDecoration: "none",
	backgroundColor: "orange",
	padding: "1em 15em",
	marginTop: "2vh",
	marginBottom:"2vh",
	font: 'bold 1.2em sans-serif',
	borderRadius: "4px",
};

var inputStyle = {
	width: "35.5em",
	height: "3em",
	display: "inline-block",
	border: "1px solid #ccc",
	boxSizing: "border-box",
	borderRadius: "4px",
	marginBottom:"1.5em",
	textAlign: "center",
}

function Signin() {
  return(
		<div style={signStyle}>
			<div style={{background:"rgba(0, 0, 0, 0.6", borderRadius:"15px", marginTop:"5em", height:"35em", padding:"2em 2em", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-around"}}>
				<h2 style={{font:'italic bold 4em "Snell Roundhand"', marginBottom:"1em", color:"orange"}}>Se connecter</h2>

				<form>
					<div style={{display: "flex", flexDirection: "column", alignItems: 'center', lineHeight: "4em"}}>
						<label for="uname" style={{font:'bold 1.5em sans-serif', marginBottom:"1em"}}><b>Username</b></label>
						<input type="text" placeholder="Enter Username" name="uname" style={inputStyle} required></input>

						<label for="psw" style={{font:'bold 1.5em sans-serif', marginBottom:"1em"}}><b>Password</b></label>
						<input type="password" placeholder="Enter Password" name="psw" style={inputStyle} required></input>
						    
						<button type="submit" style={buttonStyle}>Login</button>
					</div>
				</form>
			</div>

		</div>
    );
}

export default Signin;