import React, { Component } from 'react';
var Stream  = require ("./stream_react")
var Collection = require("./collection_react");


var Application = React.createClass({
	getInitialState : function(){
		return {
			collectionTweets:{}
		};
	},

	addTweetToCollection : function(tweet){
		var collectionTweets = this.state.collectionTweets;
		collectionTweets[tweet.id] = tweets;
		this.setState({
			collectionTweets : collectionTweets
		});
	},

	removeTweetFormCollection : function(tweet){
		var collectionTweets = this.state.collectionTweets;
		delete collectionTweets[tweet.id];
		this.setState({
			collectionTweets : collectionTweets
		});
	},

	removeAllTweetsFromCollection :function(){
		this.setState({
			collectionTweets : {}
		})
	},

	render : function(){
		return (<div className = "container-fluid">
					<div className = "row">
						<div className = "col-md-4 text-center">
							<Stream onAddTweetToCollection = {this.addTweetToCollection} />
						</div>
					</div>
					<div className = "row">
						<div className = "col-md-8">
							<Collection tweets = {this.state.collectionTweets}
								onRemoveTweetFromCollection = {this.state.removeTweetFormCollection}
								onRemoveAllTweetFromCollection = {this.state.removeAllTweetsFromCollection} />
						</div>
					</div>
				</div>
		);

	}



});





module.exports = Application;