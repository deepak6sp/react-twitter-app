var React = require("react");
var ReactDom =  require("react-dom");


var SomeReact = React.createClass({


	getInitialState:function(){
		return {
			isHeader : true,
			title:"my only first application",
			count:0,
			divDisplay:{display:"block"}
		};
	},
	changeHandle: function(){
		this.setState({
			isHeader : !this.state.isHeader
			//divDisplay:{display:"none"}
		});
	},
	render :function(){
		if(!this.state.isHeader){
			this.state.divDisplay.display = "none"
		}
		else{
			this.state.divDisplay.display = "block"
		}
		return <div> 
					<div style={this.state.divDisplay}>{this.state.title}</div>
					{this.state.count}
					<button onClick={this.changeHandle} >click to count</button>
				</div>
	} 

});

ReactDom.render(<SomeReact />, document.getElementById("react-application"));