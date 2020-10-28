import React from 'react';

function Titre({text, color}) {

	var fontStyle1 = {
	font: 'italic 1.2em "Snell Roundhand"',
	color: color,
	fontSize: "50px",
};

  return <h1 style={fontStyle1}>{text}</h1>;
}

export default Titre;