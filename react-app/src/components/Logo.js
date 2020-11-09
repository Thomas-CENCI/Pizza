import React from 'react';
import image from "../pics/pizzaiolo.jpg"

var imageStyle = {
	backgroundImage: `url(${image})`,
	height: "75px",
	width: "75px",
	marginLeft: "30px",
	alignItems: "center"
};

function Logo() {
  return <img src={image} style={imageStyle} alt="Logo" />;
}

export default Logo;