import React, { Component } from 'react';
var headerStyle = {
 	display:inline,
 	color:red
};

var Header = React.createClass({
	getDefaultProps :function(){
		return {
			text : "Default header"
		};
	},
	render : function(){
		return (
			<h2 style={headerStyle}>{this.props.text}</h2>
		);
	}
});

module.exports = Header;