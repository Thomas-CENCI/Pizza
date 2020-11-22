import React from 'react';
import image from "../pics/pizzaiolo.jpg"

var imageStyle = {
	backgroundImage: `url(${image})`,
	height: "5em",
	width: "5em",
	marginLeft: "30px",
	alignItems: "center"
};

function Logo() {
  return <img src={image} style={imageStyle} alt="Logo" />;
}

export default Logo;