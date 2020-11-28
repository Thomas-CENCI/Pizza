import React from 'react';
import Background from '../pics/BG_pizza2.jpg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from "react-router-dom";

var aboutStyle = {
	color: "black",
	marginTop: "10vh",
  	backgroundImage: `url(${Background})`,
	backgroundRepeat: "no-repeat",
	backgroundAttachment: "fixed",
	height: "130%",
	width: "100%",
	backgroundPosition: "center",
	backgroundSize: "cover",
	overflowY: "scroll",
	overflow: "hidden"
};

var textStyle = {
	color: "white",
	font: 'italic bold 2em "Snell Roundhand"',
	marginTop: "10vh",
	marginLeft: "10vh",
	width: "90%",
	backgroundColor: "rgba(0, 0, 0, 0.5)",
	padding: "30px",
	paddingRight: "75px",
	borderRadius: "25px",
}

var textStyle2 = {
	color: "white",
	font: 'italic 0.7em "Snell Roundhand"',
	marginTop: "5vh",
	marginLeft: "10vh",
	marginRight: "10vh",
	marginBottom: "10vh",
	height: "500%",
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center",
	flexDirection: "column",
	textAlign: "justify",
	textJustify: "inter-word",
}

function About() {
  return(
    <div style={aboutStyle}>
    	<div style={textStyle}>
			<h1 style={{color:'orange'}}> Lorem Ipsum </h1>
			<div style={textStyle2}>
				<p style={{marginTop:"1em"}}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec ornare dui. Donec pulvinar neque et tellus vestibulum, quis tristique ipsum dictum. Maecenas euismod diam in faucibus gravida. Morbi nec nisl quis enim malesuada scelerisque. Quisque commodo lorem in leo interdum, ac interdum sem volutpat. Etiam consequat, metus et efficitur porttitor, lorem mauris aliquam orci, quis ultrices nibh ante egestas tortor. Maecenas sit amet urna lectus. Nullam laoreet eu urna id malesuada. Duis at lacinia dolor, ut facilisis urna.
				</p>
				<p style={{marginTop:"1em"}}>
				Praesent posuere vestibulum elit sit amet efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras auctor ut nunc in euismod. Quisque sodales id nulla scelerisque ultrices. Nulla mollis lectus sit amet velit aliquam hendrerit. Vivamus dui dolor, iaculis ultricies feugiat vulputate, tempus ut sem. Integer faucibus rhoncus mauris sit amet blandit. Donec sed quam gravida, posuere metus quis, luctus nisl. Praesent ut pellentesque turpis. Quisque quis nunc vel arcu consequat ultricies a quis magna. Donec laoreet risus ut eleifend luctus. Vestibulum et sem et libero mollis dignissim quis ac massa. Nulla sed dolor molestie, lacinia velit vel, scelerisque diam. Quisque ut suscipit tellus, vitae ultrices augue. Sed velit magna, imperdiet id est et, cursus imperdiet sem.
				</p>
				<p style={{marginTop:"1em"}}>		
				Nulla eu odio non lectus venenatis ornare. Duis vehicula ex at dui condimentum volutpat. Morbi efficitur hendrerit blandit. Integer ut eleifend magna, nec facilisis ipsum. Maecenas commodo lorem eu bibendum placerat. Maecenas in dui ac velit tincidunt vulputate nec sed ipsum. Vestibulum mollis facilisis ligula. Fusce id molestie lectus. Pellentesque fringilla nibh in tincidunt facilisis. Nullam magna lorem, congue vitae gravida et, lobortis ut erat. Vivamus semper turpis eget pretium venenatis. Donec semper pharetra ex, ut dapibus urna laoreet ac. Donec et porta odio. Maecenas nulla purus, congue vel odio ut, condimentum vestibulum sapien. Phasellus tristique nibh ut arcu porta, a elementum felis dictum.
				</p>
				<p style={{marginTop:"1em"}}>
				Curabitur enim mauris, rutrum a pretium vitae, aliquam at metus. Morbi porta pulvinar metus eget tincidunt. Nam congue tincidunt ante, in dictum risus facilisis eget. Sed rhoncus at orci quis tempus. Sed vel tincidunt lorem, non malesuada est. Morbi sed libero eleifend, ornare metus interdum, malesuada purus. Vivamus ultrices nulla venenatis tellus auctor facilisis. Nullam vel eros eget urna malesuada ornare. Ut mollis eleifend aliquet.
				</p>
				<p style={{marginTop:"1em"}}>
				Donec vitae sagittis ligula, vel dignissim felis. Sed eget imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis aliquet libero quis odio lobortis mollis non sed ante. Proin aliquam dapibus elementum. In hac habitasse platea dictumst. Nam purus orci, facilisis quis consequat sed, semper id turpis. Nulla facilisi.
				</p>
			</div>
		</div>
    </div>
    );
}

export default About;