import React, { Component } from 'react';
var ReactDom =  require("react-dom");
var Tweet = require("./tweet_react");
var Header = require ("./header_react");

var StreamTweet = React.createClass({

	getInitialState :function(){
		console.log("running getInitialState in collection");
		return {
			numberOfCharacterIsIncreasing : null,
			header_text : null
		}
	},



	render : function(){
		return (
			<section>
				<div>I am in collection</div>
			</section>
		);
	}

});


module.exports = StreamTweet;