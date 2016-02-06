import React, { Component } from 'react';
var ReactDom =  require("react-dom");
var Tweet = require("./tweet_react");
var Header = require ("./header_react");

var StreamTweet = React.createClass({

	getInitialState :function(){
		console.log("StreamTweet:1 - running getInitialState in stream_tweet");
		return {
			numberOfCharacterIsIncreasing : null,
			header_text : null
		}
	},

	componentWillMount :function(){
		console.log("StreamTweet:2 - running ComponentWillMount in stream_tweet");
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
		console.log("StreamTweet:3 - running componentDidMount in stream_tweet");
		var componentDomRepresentation = ReactDom.findDOMNode(this);
		window.snapterest.headerHtml = componentDomRepresentation.children[0].outerHTML;
		window.snapterest.tweetHTML = componentDomRepresentation.children[1].outerHTML;

	},

	componentWillReceiveProps : function(){
		console.log("StreamTweet:4 - running componentWillReceiveProps in stream_tweet");
		var currentTweetLength = this.props.tweet.text.length;
		var nextTweetLength = nextProps.tweet.text.length;
		var isNumberOfCharactersIncreasing : (nextTweetLength > currentTweetLength);
		var headerText;
		this.setstate({
			numberOfCharactersIncreasing : isNumberOfCharactersIncreasing;
		});
		if (isNumberOfCharactersIncreasing){
			headerText = "number of characters is increasing";
		}
		else{
			headerText = "Latest public photos from Twitter";
		}
		this.setstate({
			headerText:headerText;
		})
		window.snapterest.numberOfReceivedTweets++;
	},

	shouldComponentUpdate : function(nextProps,nextState){
		console.log("StreamTweet:5 - running shouldComponentUpdate in stream_tweet");
		return (nextProps.tweet.text.length > 1);
	},

	componentWillUpdate : function(nextProps,nextState){
		console.log("StreamTweet:6 - running componentWillUpdate in stream_tweet");
	},

	componentDidUpdate: function(prevProps,prevState){
		console.log("StreamTweet:7 - running componentWillUpdate in stream_tweet");
		window.snapterest.numberOfDisplayedTweets++;
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