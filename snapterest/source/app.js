var React = require("react");
var ReactDom =  require("react-dom");

var SomeReact = React.createClass({
	getInitialState:function(){
		return {
			isHeader : false,
			title:"my only first application"
		};
		
	},
	render :function(){
		return <div> 
					{this.state.title}
				</div>
	}

});

React.render(<SomeReact />, document.getElementById("react-application"));