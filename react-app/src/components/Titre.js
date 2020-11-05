import React from 'react';

function Titre({text, color}) {

	var fontStyle1 = {
		font: 'italic 1.2em "Snell Roundhand"',
		fontSize: "50px",
		background: color,
		textShadow: "3px 3px 0px rgba(0,0,0,0.2)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
};

  return <h1 style={fontStyle1}>{text}</h1>;
}

export default Titre;