import React from 'react';
import image from "./pics/pizzaiolo.png"

var imageStyle = {
	backgroundImage: `url(${image})`,
	height: "75px",
	width: "75px",
};

function Logo() {
  return <img src={image} style={imageStyle} alt="Logo" />;
}

export default Logo;