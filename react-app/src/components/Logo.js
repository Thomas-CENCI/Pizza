import React from 'react';
import image from "../pics/pizzaiolo.jpg"

var imageStyle = {
	backgroundImage: `url(${image})`,
	height: "50px",
	width: "50px",
	marginLeft: "30px"
};

function Logo() {
  return <img src={image} style={imageStyle} alt="Logo" />;
}

export default Logo;