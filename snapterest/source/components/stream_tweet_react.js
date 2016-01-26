import React, { Component } from 'react';
var ReactDom =  require("react-dom");
var Tweet = require("./tweet_react");
var Header = require ("./header_react");

var StreamTweet = React.createClass({

	getInitialState :function(){
		console.log("running getInitialState in stream_tweet");
		return {
			numberOfCharacterIsIncreasing : null,
			header_text : null
		}
	},

	componentWillMount :function(){
		console.log("running ComponentWillMount in stream_tweet");
		this.setstate({
			numberOfCharacterIsIncreasing : true,
			headerText : "Latest public photo from Twitter"
		});
		window.snapterest = {
			numberOfReceivedTweets = 1,
			numberOfDisplayedTweets = 1
		};
	},

	componentDidMount :  function(){
		console.log("running componentDidMount in stream_tweet");
		var componentDomRepresentation = ReactDom.findDOMNode(this);
		window.snapterest.headerHtml = componentDomRepresentation.children[0].outerHTML;
		window.snapterest.tweetHTML = componentDomRepresentation.children[1].outerHTML;

	},

	componentWillUnMount : function(){
		console.log("running componentWillUnMount in stream_tweet");
		delete window.snapterest;

	},



	render : function(){
		return (
			<section>
				<Header text={this.state.headerText} />
				<Tweet tweet={this.props.tweet}
					onImageclick = {this.props.onAddTweetToCollection} />

			</section>
		);
	}

});


module.exports = StreamTweet;