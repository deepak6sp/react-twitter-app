var React = require("react");
var ReactDom =  require("react-dom");
//var Application = require("./collection_react");


var Application = React.createClass({
	getInitialState : function(){
		return {
			count:0
		}
	},
	render :function(){
		//console.log("this.state.collectionTweets"+ this.state.collectionTweets);
		return (
			<div>
				{this.state.count}
			</div>
		);
	}

});


module.exports = Application;