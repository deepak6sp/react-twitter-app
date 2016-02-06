import React, { Component } from 'react';

var tweetStyle={
	width:300px;
	height:300px;
	display:inline-block;
};


var imageStyle= {
	border:1px solid black;
	max-height:400px;
};


var Tweet = React.createClass({
	propTypes : {
		tweet : function(properties,propertyName,componentName){
			var tweet = properties[propertyName];
			if(!tweet){
				return new Error('tweet must be set');
			}
			if (!tweet.medie){
				return new Error('tweet must have an image');
			}
		},
		onImageClick : React.propTypes.func;
	},
	handleImageClick : function(){
		var tweet = this.props.tweet;
		var onImageClick = this.props.onImageClick;
		if (onImageClick){
			onImageClick(tweet);
		}
	},
	render:function(){
		var tweet = this.props.tweet;
		var tweetMediaUrl = tweet.medi[0].url;

		return (
			<div style = {tweetStyle}>
				<img style={imageStyle} src={tweetMediaUrl} onClick = {this.handleImageClick} />
			</div>
		);
	}
});

module.exports = Tweet;