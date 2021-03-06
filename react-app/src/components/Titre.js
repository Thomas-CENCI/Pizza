import React from 'react';

function Titre({text, color}) {

	var fontStyle1 = {
		textShadow: "2px 2px 0px rgba(0,0,0,0.1)",
		font: 'italic bold 2em "Snell Roundhand"',
		fontSize: "50px",
		marginLeft: "10px",
		marginTop: "10px",
		background: color,
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
	};

  return <h1 style={fontStyle1}>{text}</h1>;
}

export default Titre;