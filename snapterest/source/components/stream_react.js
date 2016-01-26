import React, { Component } from 'react';
var SnapkiteStreamClient  = require ("snapkite-stream-client")
var StreamTweet = require("./stream_tweet_react");
var Header  =  require("./header_react");

var Stream = React.createClass({
	getInitialState: function(){
		return {
			tweet : null
		}
	},

	componentDidMount : function(){
		SnapkiteStreamClient : initializeStream(this.handleNewTweet);
	},

	componentWillUnMount : function(){
		SnapkiteStreamClient : destroyStream();
	},

	handleNewTweet : function(){
		this.setState({
			tweet: tweet
		});
	},

	render :  function(){
		var tweet = this.state.tweet;
		if (tweet){
			return (
				<StreamTweet tweet={tweet} onAddTweetToCollection  = {this.props.onAddTweetToCollection} />

			);
		}
		return(
			<Header text="waiting for public photos from twitter .... " />
		);
	}
});


module.exports = Stream;





